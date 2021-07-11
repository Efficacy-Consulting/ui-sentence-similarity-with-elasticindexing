import {HttpClient} from '@angular/common/http';
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import { DocType } from 'src/app/core/model/doc-type';
import { SimilarityResult } from 'src/app/core/model/similarity-result';
import { SimilarDocsService } from 'src/app/core/services/similar-docs.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, AfterViewInit {
  searchString = '';

  similarityResult!: SimilarityResult;
  constructor(
      private docsService: SimilarDocsService,
      private httpClient: HttpClient,
      private spinner: NgxSpinnerService,
      private router: Router,
  ) {
    const navigation: any = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    if (state) {
      this.searchString = state.searchString.payload.search_string;
    } else {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.similarityResult = this.docsService.getSimilarDocs();
    if (this.similarityResult === undefined) {
      this.router.navigate(['']);
    }
  }

  ngAfterViewInit(): void {}

  search() {
    console.log(this.searchString);
    const params: any = this.docsService.getSimilarityParams();
    params.payload.search_string = this.searchString;

    this.docsService.setSimilarityParams(params);
    this.spinner.show();
    this.httpClient
        .post<any>('/api/search', params)
        .subscribe(
            (res) => {
              this.spinner.hide();
              this.similarityResult.similarDocs = res.data;
              this.docsService.setSimilarDocs(this.similarityResult);
            },
            (err) => {
              console.log(err);
              this.spinner.hide();
            });
  }

  expandDocument(docObject: DocType) {
    const navigationExtras: NavigationExtras = {state: {doc: docObject}};
    this.router.navigate(['/search/results/expanded-document'], navigationExtras);
  }
}

''