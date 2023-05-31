import { ISection } from '../types/ISection';
import { ISectionRepository, ISectionRepositoryOptions } from '../types/ISectionRepository';
import convertIndexToSectionList from '../utils/convertIndexToSectionList.portal';
import fetchAsText from '../utils/fetchAsText';

export default class SectionRepository extends ISectionRepository {
  private readonly domParser: DOMParser;

  private readonly indexHtmlUrl: string;

  private sectionList: ISection[];

  private isInitialized: boolean;

  public constructor(options: ISectionRepositoryOptions) {
    super();
    this.domParser = options.domParser;
    this.indexHtmlUrl = options.indexHtmlUrl;
    this.sectionList = [];
    this.isInitialized = false;
  }

  public async findAll(): Promise<ISection[]> {
    if (!(this.isInitialized)) {
      this.isInitialized = true;
      const html = await fetchAsText(this.indexHtmlUrl);
      const sectionList = convertIndexToSectionList({
        domParser: this.domParser,
        html,
      });
      this.sectionList = sectionList;
      return sectionList;
    }
    return this.sectionList;
  }
}
