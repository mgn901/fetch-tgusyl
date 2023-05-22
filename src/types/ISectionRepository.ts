import { ISection } from './ISection';

export interface ISectionRepositoryOptions {
  domParser: DOMParser;
}

export abstract class ISectionRepository {
  public abstract addSource(indexHTML: string): void;
  public abstract findAll(): ISection[];
}
