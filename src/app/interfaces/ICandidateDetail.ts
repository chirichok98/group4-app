import { IContacts } from './IContacts';
import { ITechSkill } from './ITechSkill';
import { IPositionPreview } from './IPositionPreview';
import { IUserPreview } from './IUserPreview';
import { IInterviewPreview } from './IInterviewPreview';
import { ICandidatePrevJob } from './ICandidatePrevJob';

export interface ICandidateDetail {
  id: number;
  firstNameEng: string | null;
  lastNameEng: string | null;
  firstNameRus: string | null;
  lastNameRus: string | null;
  picture: string | null;
  contact: IContacts | null;
  city: string | null;
  candidatePrimarySkill: ITechSkill | null;
  candidateSecondarySkills: ITechSkill[] | null;
  psExperience: Date | null;
  engLevel: string | null;
  desiredSalary: number | null;
  lastContactDate: Date | null;
  hrm: IUserPreview | null;
  status: string | null;
  reminder: Date | null;
  generalInterviewStatus: null;
  customerInterviewStatus: null;
  techInterviewStatus: null;
  customerInterviewDate: null;
  lastModifier: IUserPreview;
}
