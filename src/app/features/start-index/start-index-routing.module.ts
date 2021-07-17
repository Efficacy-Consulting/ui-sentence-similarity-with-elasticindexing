import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartIndexComponent } from './start-index.component';

const routes: Routes = [{ path: '', component: StartIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartIndexRoutingModule { }
