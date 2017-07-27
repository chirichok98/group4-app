import { ITechSkill } from './ITechSkill';

export interface IPositionPreview {
  id: number;
  projectName: string;
  vacancyName: string;
  city: string;
  creationDate: Date;
  primarySkill: ITechSkill;
}
