import { ITechSkill } from './ITechSkill';

export interface ICandidatePreview {
  id: number;
  firstNameEng: string | null;
  lastNameEng: string | null;
  email: string | null;
  phone: string | null;
  picture: string | null;
}
