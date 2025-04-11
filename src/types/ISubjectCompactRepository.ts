import type { ISubjectCompact } from './ISubjectCompact';

export interface ISubjectCompactRepositoryOptions {
  tabHtmlList: string[];
  domParser: DOMParser;
}

export abstract class ISubjectCompactRepository {
  public abstract addSource(...tabHtmlList: string[]): void;
  public abstract findAll(): ISubjectCompact[];
}
