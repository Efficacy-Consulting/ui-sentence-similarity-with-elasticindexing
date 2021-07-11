import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpandedDocumentComponent } from './expanded-document/expanded-document.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'results', component: SearchResultsComponent },
  { path: 'results/expanded-document', component: ExpandedDocumentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
