import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-start-index',
  templateUrl: './start-index.component.html',
  styleUrls: ['./start-index.component.scss'],
})
export class StartIndexComponent implements OnInit {
  options!: JsonEditorOptions;
  startIndexingParams: any;

  @ViewChild(JsonEditorComponent, { static: false })
  editor!: JsonEditorComponent;
  completed!: boolean;

  constructor(
    private spinner: NgxSpinnerService,
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.options = new JsonEditorOptions();
    this.options.mode = 'code'; //set only one mode
    this.options.statusBar = false;
    this.options.mainMenuBar = false;
    this.startIndexingParams = { data_source: './data/articles1_1k.csv' };
  }

  ngOnInit(): void {}

  startIndexing() {
    this.completed = false;
    let params: any = {
    };
    params = this.editor.get();
    this.spinner.show();
    this.httpClient.post<any>('/api/start-indexing-all', params).subscribe(
      (res) => {
        console.log(res);
        this.completed = true;
        this.spinner.hide();
      },
      (err) => {
        console.log(err);
        this.spinner.hide();
      }
    );
  }
}
