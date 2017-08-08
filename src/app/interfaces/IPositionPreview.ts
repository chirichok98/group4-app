import { ITechSkill } from './ITechSkill';

export interface IPositionPreview {
  id: number;
  projectName: string;
  positionName: string;
  status: string;
  city: string;
  startDate: Date;
  closeDate: Date;
  primarySkill: ITechSkill;
}
