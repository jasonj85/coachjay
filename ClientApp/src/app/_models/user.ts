import { Photo } from './photo';
import { defineDirective } from '@angular/core/src/render3';

export interface User {
  id: number;
  username: string;
  gender: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  photos?: Photo[];
}
