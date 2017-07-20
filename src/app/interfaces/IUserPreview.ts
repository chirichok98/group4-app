import { IUserRole } from './IUserRole';

export interface IUserPreview {
  id: number;
  name: string;
  role: IUserRole;
}
