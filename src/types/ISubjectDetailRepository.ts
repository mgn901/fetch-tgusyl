import type { ISubjectDetail } from './ISubjectDetail';

export interface ISubjectDetailRepositoryOptions {
  domParser: DOMParser;
}

export abstract class ISubjectDetailRepository {
  public abstract findByID(
    id: ISubjectDetail['subjectId'],
    revalidate?: boolean,
  ): Promise<ISubjectDetail | undefined>;
}
