import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss'],
})
export class Landing {
  components = [
    { id: 1, name: 'Puzzle 1', description: 'Description for Puzzle 1', path: 'puzzle1' },
    { id: 2, name: 'Puzzle 2', description: 'Description for Puzzle 2', path: 'puzzle2' },
    { id: 3, name: 'Puzzle 3', description: 'Description for Puzzle 3', path: 'puzzle3' },
    { id: 4, name: 'Puzzle 4', description: 'Description for Puzzle 4', path: 'puzzle4' },
    { id: 5, name: 'Puzzle 5', description: 'Description for Puzzle 5', path: 'puzzle5' },
    { id: 6, name: 'Puzzle 6', description: 'Description for Puzzle 6', path: 'puzzle6' },
    { id: 7, name: 'Puzzle 7', description: 'Description for Puzzle 7', path: 'puzzle7' },
    { id: 8, name: 'Puzzle 8', description: 'Description for Puzzle 8', path: 'puzzle8' },
    { id: 9, name: 'Puzzle 9', description: 'Description for Puzzle 9', path: 'puzzle9' },
    { id: 10, name: 'Puzzle 10', description: 'Description for Puzzle 10', path: 'puzzle10' },
  ];
}
