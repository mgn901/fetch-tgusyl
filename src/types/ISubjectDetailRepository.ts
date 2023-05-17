import { ISubjectDetail } from './ISubjectDetail';

export interface ISubjectDetailRepositoryOptions {
<<<<<<< HEAD
  domParser: DOMParser;
}

export abstract class ISubjectDetailRepository {
  public abstract findByID(id: ISubjectDetail['id'], revalidate?: boolean): Promise<ISubjectDetail | undefined>;
=======
	domParser: DOMParser;
}

export abstract class ISubjectDetailRepository {
	public abstract findByID(id: ISubjectDetail['id'], revalidate?: boolean): Promise<ISubjectDetail | undefined>;
>>>>>>> 95c1fd0 (Create interfaces for repositories)
}
