import { IContacts } from './IContacts';

export interface ICandidatePrevJob {
  id: number;
  companyName: string;
  position: string;
  contacts: IContacts;
}
