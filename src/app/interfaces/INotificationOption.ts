import { ICandidatePreview } from './ICandidatePreview';
import { IPositionPreview } from './IPositionPreview';
import { ITechInterview } from './ITechInterview';
import { IGeneralInterview } from './IGeneralInterview';

export interface INotificationOption {
  notificationType: string | null;
  date: Date | null;
  active: boolean | null;
  candidate: ICandidatePreview | null;
  position: IPositionPreview | null;
  techInterview: ITechInterview | null;
  generalInterview: IGeneralInterview | null;
  id: number | null;
}
