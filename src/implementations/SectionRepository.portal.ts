import { ISection } from '../types/ISection';
import { ISectionRepository, ISectionRepositoryOptions } from '../types/ISectionRepository';
import convertHtmlToDocument from '../utils/convertHtmlToDocument';

export default class SectionRepository extends ISectionRepository {
  private readonly domParser: DOMParser;

  private sectionList: ISection[];

  public constructor(options: ISectionRepositoryOptions) {
    super();
    this.domParser = options.domParser;
    this.sectionList = [];
  }

  public addSource = (indexHTML: string) => {
    const document = convertHtmlToDocument(indexHTML, this.domParser);
    const anchors = document.querySelectorAll('ui-tabs-anchor');
    const sectionList: ISection[] = [];

    anchors.forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (!(href?.startsWith('tab_kamoku.php'))) {
        return;
      }
      sectionList.push({
        tabName: anchor.textContent || '',
        tabURL: new URL(href, 'https://portal.u-gakugei.ac.jp/syllabus/').href,
      });
    });

    this.sectionList = sectionList;
  };

  public findAll = (): ISection[] => {
    const sectionList = [...this.sectionList];
    return sectionList;
  };
}
