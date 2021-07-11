import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

import { NgJsonEditorModule } from 'ang-jsoneditor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { ExpandedDocumentComponent } from './expanded-document/expanded-document.component';


@NgModule({
  declarations: [
    SearchComponent,
    SearchResultsComponent,
    ExpandedDocumentComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    SearchRoutingModule,
    NgxSpinnerModule,
    NgJsonEditorModule,
    AngularSplitModule
  ]
})
export class SearchModule { }
