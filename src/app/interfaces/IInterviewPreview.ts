import { IUserPreview } from './IUserPreview';

export interface IInterviewPreview {
  id: number;
  date: Date;
  hrm: IUserPreview;
  interviewer: IUserPreview;
}
