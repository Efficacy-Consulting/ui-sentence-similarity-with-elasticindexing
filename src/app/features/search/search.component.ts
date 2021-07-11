import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { NgxSpinnerService } from 'ngx-spinner';
import { SimilarityResult } from 'src/app/core/model/similarity-result';
import { SimilarDocsService } from 'src/app/core/services/similar-docs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  options!: JsonEditorOptions;
  data: any;
  searchString = '';
  advancedSettings = false;

  @ViewChild(JsonEditorComponent, { static: false })
  editor!: JsonEditorComponent;

  constructor(
    private docsService: SimilarDocsService, 
    private spinner: NgxSpinnerService,
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.options = new JsonEditorOptions();
    // this.options.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.options.mode = 'code'; //set only one mode
    this.options.statusBar = false;
    this.options.mainMenuBar = false;
    this.data = { content: 'Health Care' };
  }

  ngOnInit(): void {}

  search() {
    let params: any = {
      payload: {}
    };
    if (this.advancedSettings) {
      params.payload = this.editor.get();
      params.payload.search_string = this.searchString;
    } else {
      params.payload.search_string = this.searchString;
    }

    this.docsService.setSimilarityParams(params);
    this.spinner.show();

    this.httpClient.post<any>('/api/search', params).subscribe(
      (res) => {
        this.spinner.hide();
        const result: SimilarityResult = new SimilarityResult();
        result.similarDocs = res.data;
        this.docsService.setSimilarDocs(result);

        console.log(res);
        const navigationExtras: NavigationExtras = {
          state: { searchString: params },
        };
        setTimeout(() => this.router.navigate(['/search/results'], navigationExtras));
      },
      (err) => {
        console.log(err);
        this.spinner.hide();
      }
    );
  }
}
