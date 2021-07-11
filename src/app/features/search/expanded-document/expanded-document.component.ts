import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { DocType } from 'src/app/core/model/doc-type';

@Component({
  selector: 'app-expanded-document',
  templateUrl: './expanded-document.component.html',
  styleUrls: ['./expanded-document.component.scss']
})
export class ExpandedDocumentComponent implements OnInit {
  documentObject!: DocType;
  constructor(private router: Router) {
    const navigation: any = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {doc: DocType};
    if (state) {
      this.documentObject = state.doc;
    } else {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {}
}
