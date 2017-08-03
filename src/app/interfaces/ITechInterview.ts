import { IUserPreview } from './IUserPreview';
export interface ITechInterview {
  commentary: string;
  city: string;
  date: Date;
  id: number;
  endDate: Date;
  feedback: string;
  hrm: IUserPreview;
  interviewer: IUserPreview;
  status: boolean;
  techSkill: string;
}
