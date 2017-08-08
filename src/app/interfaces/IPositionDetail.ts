import { ITechSkill } from './ITechSkill';
import { ICandidatePreview } from './ICandidatePreview';
import { IUserPreview } from './IUserPreview';

export interface IPositionDetail {
  id: number;
  projectName: string;
  vacancyName: string;
  requestDate: Date;
  startDate: Date;
  closeDate: Date;
  status: string;
  link: string;
  primarySkill: ITechSkill;
  engLevel: string;
  experience: number | null;
  city: string;
  secondarySkills: ITechSkill[];
  candidates: ICandidatePreview[];
  hrm: IUserPreview;
}
