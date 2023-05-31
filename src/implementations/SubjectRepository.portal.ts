import { ISection } from '../types/ISection';
import { ISubjectCompact } from '../types/ISubjectCompact';
import { ISubjectDetail } from '../types/ISubjectDetail';
import { ISubjectRepository, ISubjectRepositoryOptions, TSubjectRepositoryQuery } from '../types/ISubjectRepository';
import convertReferenceDirectToSubjectDetail from '../utils/convertReferenceDirectToSubjectDetail.tgusyl';
import convertTabKamokuToSubjectCompactList from '../utils/convertTabKamokuToSubjectCompactList.portal';
import fetchAsText from '../utils/fetchAsText';
import promiseSequential from '../webextension/utils/promiseSequential';

export default class SubjectRepository extends ISubjectRepository {
  private readonly domParser: DOMParser;

  private readonly sections: (ISection & { isFetched: boolean })[];

  private subjectMap: Map<string, ISubjectCompact | ISubjectDetail>;

  public constructor(options: ISubjectRepositoryOptions) {
    super();
    this.domParser = options.domParser;
    this.sections = options.sections.map((section) => ({ ...section, isFetched: false }));
    this.subjectMap = new Map<string, ISubjectCompact | ISubjectDetail>();
  }

  public retrieve = async (query: TSubjectRepositoryQuery): Promise<void> => {
    if (query.type === 'compact') {
      const { sections } = query;

      const toBeFetchedSections = [...this.sections].filter(
        (section) => sections.includes(section.tabName)
          && !(section.isFetched),
      );

      const wrappedPromises = toBeFetchedSections.map((section) => (async () => {
        const html = await fetchAsText(section.tabURL);
        const subjectList = convertTabKamokuToSubjectCompactList({
          domParser: this.domParser,
          html,
          updatedAt: new Date(),
          subjectCompactList: [],
        });
        subjectList.forEach((subject) => {
          this.subjectMap.set(subject.id, subject);
        });
      }));

      await promiseSequential(wrappedPromises);
    } else {
      const { ids } = query;

      const toBeFetchedSubjects = [...this.subjectMap.values()].filter(
        (subject) => ids.includes(subject.id) && !(subject.type === 'compact'),
      );

      const wrappedPromises = toBeFetchedSubjects.map((subject) => (async () => {
        const referenceURL = new URL('https://tgusyl.u-gakugei.ac.jp/ext_syllabus/referenceDirect.do?nologin=on&formatCD=1');
        referenceURL.searchParams.set('subjectID', subject.id);
        const html = await fetchAsText(referenceURL);
        const subjectDetail = convertReferenceDirectToSubjectDetail({
          domParser: this.domParser,
          html,
          id: subject.id,
          referenceURL,
          updatedAt: new Date(),
        });
        if (!subjectDetail) {
          return;
        }
        this.subjectMap.set(subjectDetail.id, subjectDetail);
      }));

      await promiseSequential(wrappedPromises);
    }
  };

  public async findRetrieved(): Promise<(ISubjectCompact | ISubjectDetail)[]> {
    return [...this.subjectMap.values()];
  }

  public async findById(id: string): Promise<ISubjectCompact | ISubjectDetail | undefined> {
    return this.subjectMap.get(id);
  }
}
