import { ITechSkill } from './ITechSkill';

export interface ICandidatePreview {
  id: number;
  firstNameEng: string;
  lastNameEng: string;
  email: string;
  phone: string;
  primarySkill: ITechSkill;
}
