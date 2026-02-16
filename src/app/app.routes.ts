import { Routes } from '@angular/router';
import { Landing } from './componenets/landing/landing';
import { Puzzle1 } from './componenets/puzzle1/puzzle1';
import { Puzzle2 } from './componenets/puzzle2/puzzle2';
import { Puzzle3 } from './componenets/puzzle3/puzzle3';
import { Puzzle4 } from './componenets/puzzle4/puzzle4';
import { Puzzle5 } from './componenets/puzzle5/puzzle5';
import { Puzzle6 } from './componenets/puzzle6/puzzle6';
import { Puzzle7 } from './componenets/puzzle7/puzzle7';
import { Puzzle8 } from './componenets/puzzle8/puzzle8';
import { Puzzle9 } from './componenets/puzzle9/puzzle9';
import { Puzzle10 } from './componenets/puzzle10/puzzle10';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'puzzle1', component: Puzzle1 },
  { path: 'puzzle2', component: Puzzle2 },
  { path: 'puzzle3', component: Puzzle3 },
  { path: 'puzzle4', component: Puzzle4 },
  { path: 'puzzle5', component: Puzzle5 },
  { path: 'puzzle6', component: Puzzle6 },
  { path: 'puzzle7', component: Puzzle7 },
  { path: 'puzzle8', component: Puzzle8 },
  { path: 'puzzle9', component: Puzzle9 },
  { path: 'puzzle10', component: Puzzle10 },
];
