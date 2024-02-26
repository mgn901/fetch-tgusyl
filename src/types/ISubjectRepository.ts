import { ISection } from './ISection';
import { ISubjectCompact } from './ISubjectCompact';
import { ISubjectDetail } from './ISubjectDetail';

export interface ISubjectRepositoryOptions {
  sections: ISection[];
  domParser: DOMParser;
}

export type TSubjectRepositoryQuery = {
  type: 'detail';
  ids: string[];
} | {
  type: 'compact';
  sections: ISection['tabName'][];
};

export abstract class ISubjectRepository extends EventTarget {
  public abstract addSection(...sections: ISection[]): void;
  public abstract retrieve(query: TSubjectRepositoryQuery): Promise<void>;
  public abstract findRetrieved(): Promise<(ISubjectCompact | ISubjectDetail)[]>;
  public abstract findById(id: string): Promise<(ISubjectCompact | ISubjectDetail | undefined)>;
}
