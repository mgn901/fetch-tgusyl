import { ISection } from './ISection';

export interface ISectionRepositoryOptions {
  indexHtmlUrl: string;
  domParser: DOMParser;
}

export abstract class ISectionRepository extends EventTarget {
  public abstract findAll(): Promise<ISection[]>;
}
