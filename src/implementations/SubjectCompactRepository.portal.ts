import { ISubjectCompact } from '../types/ISubjectCompact';
import { ISubjectCompactRepository, ISubjectCompactRepositoryOptions } from '../types/ISubjectCompactRepository';
import convertTabKamokuToSubjectCompactList from '../utils/convertTabKamokuToSubjectCompactList.portal';

export default class SubjectCompactRepository extends ISubjectCompactRepository {
  private readonly domParser: DOMParser;

  private subjectCompactList: ISubjectCompact[];

  private readonly updatedAt: Date;

  public constructor(options: ISubjectCompactRepositoryOptions) {
    super();
    this.domParser = options.domParser;
    this.subjectCompactList = [];
    this.updatedAt = new Date();
    this.addSource(...options.tabHtmlList);
  }

  public addSource(...tabHtmlList: string[]) {
    tabHtmlList.forEach((tabHtml) => {
      this.subjectCompactList = convertTabKamokuToSubjectCompactList({
        updatedAt: this.updatedAt,
        html: tabHtml,
        domParser: this.domParser,
        subjectCompactList: this.subjectCompactList,
      });
    });
  }

  public findAll(): ISubjectCompact[] {
    const subjectCompactList = [...this.subjectCompactList];
    return subjectCompactList;
  }
}
