import { IEnglishLevel } from './IEnglishLevel';
import { ICity } from './ICity';
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
  englishLevel: IEnglishLevel;
  experience: number | null;
  primarySkillLevel: number | null;
  city: ICity;
  vacancyStatus: IVacancyStatus;
  techSkills: ITechSkill[];
  candidates: ICandidatePreview[];
  // events
}
