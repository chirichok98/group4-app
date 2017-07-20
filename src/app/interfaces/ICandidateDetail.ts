import { IContacts } from './IContacts';
import { ITechSkill } from './ITechSkill';
import { IPositionPreview } from './IPositionPreview';
import { IUserPreview } from './IUserPreview';
import { IInterviewPreview } from './IInterviewPreview';
import { ICandidatePrevJob } from './ICandidatePrevJob';

export interface ICandidateDetail {
  id: number;
  firstNameEng: string;
  lastNameEng: string;
  firstNameRus: string;
  lastNameRus: string;
  picture: string;
  contact: IContacts;
  city: string;
  primarySkill: ITechSkill;
  secondarySkills: ITechSkill[];
  experience: Date | null;
  englishLevel: string;
  desiredSalary: number | null;
  lastContactDate: Date;
  vacancies: IPositionPreview[];
  hrm: IUserPreview;
  status: string;
  reminder: Date;
  interviews: IInterviewPreview[];
  prevJobContacts: ICandidatePrevJob[];
}
