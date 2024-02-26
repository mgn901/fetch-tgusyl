import { sectionRepository, subjectRepository } from './repositories';

const offscreenChannelFunctionMap = {
  'sectionRepository:findAll': sectionRepository.findAll,
  'subjectRepository:addSection': subjectRepository.addSection,
  'subjectRepository:retrieve': subjectRepository.retrieve,
  'subjectRepository:findRetrieved': subjectRepository.findRetrieved,
  'subjectRepository:findById': subjectRepository.findById,
};

export default offscreenChannelFunctionMap;
