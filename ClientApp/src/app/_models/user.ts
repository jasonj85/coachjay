import { Photo } from './photo';

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  photos?: Photo[];
}
