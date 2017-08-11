import { IUserPreview } from './IUserPreview';

export interface IGeneralInterview {
  id: number;
  city: string;
  commentary: string;
  date: Date;
  endDate: Date;
  feedback: string;
  hrm: IUserPreview;
  interviewer: IUserPreview;
  status: boolean;
  engLevel: string;
}
