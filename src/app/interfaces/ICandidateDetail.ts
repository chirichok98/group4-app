import { IContacts } from './IContacts';
import { ICity } from './ICity';
import { ITechSkill } from './ITechSkill';
import { IEnglishLevel } from './IEnglishLevel';
import { IPositionPreview } from './IPositionPreview';
import { IUserPreview } from './IUserPreview';
import { ICandidateStatus } from './ICandidateStatus';
import { IInterviewPreview } from './IInterviewPreview';

export interface ICandidateDetail {
  id: number;
  firstNameEng: string;
  lastNameEng: string;
  firstNameRus: string;
  lastNameRus: string;
  imgUrl: string;
  contact: IContacts;
  city: ICity;
  primarySkill: ITechSkill;
  secondarySkills: ITechSkill[];
  experience: Date;
  englishLevel: IEnglishLevel;
  desiredSalary: number | null;
  lastContactDate: Date;
  vacancies: IPositionPreview[];
  hrm: IUserPreview;
  status: ICandidateStatus;
  reminder: Date;
  interviews: IInterviewPreview[];
}
