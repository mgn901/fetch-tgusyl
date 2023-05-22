import { ISubjectCompact } from './ISubjectCompact';

export interface ISubjectCompactRepositoryOptions {
  tabHtmlList: string[];
  domParser: DOMParser;
}

export abstract class ISubjectCompactRepository {
  public abstract addSource(...tabHtmlList: string[]): Promise<void>;
  public abstract findAll(): ISubjectCompact[];
}
