import { Injectable } from '@angular/core';
import { SimilarityResult } from '../model/similarity-result';

@Injectable({
  providedIn: 'root'
})
export class SimilarDocsService {
  private similarDocs!: SimilarityResult;
  private modelIndexFiles!: [];
  private similarityParams!: {};

  private selectedModelIndex = 0;

  constructor() {}

  setSimilarDocs(dt: SimilarityResult) {
    this.similarDocs = dt;
  }

  getSimilarDocs(): SimilarityResult {
    return this.similarDocs;
  }

  setModelIndexFiles(modelIndexFiles: []) {
    this.modelIndexFiles = modelIndexFiles;
  }

  getModelIndexFiles(): [] {
    return this.modelIndexFiles;
  }

  setSimilarityParams(params: any) {
    this.similarityParams = params;
  }

  getSimilarityParams(): {} {
    return this.similarityParams;
  }

  getSelectedModelIndex(): number {
    return this.selectedModelIndex;
  }

  setSelectedModelIndex(index: number) {
    this.selectedModelIndex = index;
  }
}
