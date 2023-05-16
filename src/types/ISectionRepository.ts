import { ISection } from './ISection';

export interface ISectionRepositoryOptions {
	indexHTML: string;
	domParser: DOMParser;
}

export abstract class ISectionRepository {
	public abstract findAll(): ISection[];
}
