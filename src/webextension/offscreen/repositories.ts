import SectionRepository from '../../implementations/SectionRepository.portal';
import SubjectRepository from '../../implementations/SubjectRepository.portal';

const domParser = new DOMParser();

export const sectionRepository = new SectionRepository({
  domParser,
  indexHtmlUrl: 'https://portal.u-gakugei.ac.jp/syllabus/',
});

export const subjectRepository = new SubjectRepository({
  domParser,
  sections: [],
});

sectionRepository.addEventListener('update', () => {
  // send message
});

subjectRepository.addEventListener('update', () => {
  // send message
});
