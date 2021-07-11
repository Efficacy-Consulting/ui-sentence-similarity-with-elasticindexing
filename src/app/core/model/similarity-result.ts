import { DocType } from './doc-type';

export class SimilarityResult {
  sourceId!: string;
  sourceSentence!: string;

  similarDocs!: Array<DocType>;
}
