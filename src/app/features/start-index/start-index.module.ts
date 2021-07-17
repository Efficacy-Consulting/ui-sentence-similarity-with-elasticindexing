import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartIndexRoutingModule } from './start-index-routing.module';
import { StartIndexComponent } from './start-index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgJsonEditorModule } from 'ang-jsoneditor';


@NgModule({
  declarations: [
    StartIndexComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    NgxSpinnerModule,
    NgJsonEditorModule,
    
    StartIndexRoutingModule
  ]
})
export class StartIndexModule { }
