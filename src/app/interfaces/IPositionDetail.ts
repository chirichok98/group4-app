import { IVacancyStatus } from './IVacancyStatus';
import { ITechSkill } from './ITechSkill';
import { ICandidatePreview } from './ICandidatePreview';

export interface IPositionDetail {
  id: number;
  projectName: string;
  vacancyName: string;
  requestDate: Date;
  startDate: Date;
  status: string;
  link: string;
  primarySkill: ITechSkill;
  engLevel: string;
  experience: number | null;
  primarySkillLevel: number | null;
  city: string;
  secondarySkills: ITechSkill[];
  candidates: ICandidatePreview[];
  // events
}
