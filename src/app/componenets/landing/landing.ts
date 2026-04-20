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
    { id: 1, name: 'Rebus 1', description: 'NL - 7', path: 'puzzle1' },
    { id: 2, name: 'Rebus 2', description: 'EN - 9', path: 'puzzle2' },
    { id: 3, name: 'Rebus 3', description: 'NL - 5', path: 'puzzle3' },
    { id: 4, name: 'Rebus 4', description: 'EN - 6', path: 'puzzle4' },
    { id: 5, name: 'Rebus 5', description: 'EN - 6', path: 'puzzle5' },
    { id: 6, name: 'Rebus 6', description: 'LAT - 6', path: 'puzzle6' },
    { id: 7, name: 'Rebus 7', description: 'NL - 9', path: 'puzzle7' },
    { id: 8, name: 'Rebus 8', description: 'NL - 8', path: 'puzzle8' },
    { id: 9, name: 'Rebus 9', description: 'NL - 5', path: 'puzzle9' },
    { id: 10, name: 'Rebus 10', description: 'EN - 4', path: 'puzzle10' },
    { id: 11, name: 'Rebus 11', description: 'NL - 8', path: 'puzzle11' },
    { id: 12, name: 'Rebus 12', description: 'NL - 4', path: 'puzzle12' },
    { id: 13, name: 'Rebus 13', description: 'EN - 8', path: 'puzzle13' },
    { id: 14, name: 'Rebus 14', description: 'NL - 6', path: 'puzzle14' },
    { id: 15, name: 'Rebus 15', description: 'NL - 8', path: 'puzzle15' },
    { id: 16, name: 'Rebus 16', description: 'NL - 4', path: 'puzzle16' },
    { id: 17, name: 'Rebus 17', description: 'NL - 9', path: 'puzzle17' },
    { id: 18, name: 'Rebus 18', description: 'NL - 6', path: 'puzzle18' },
    { id: 19, name: 'Rebus 19', description: 'EN - 6', path: 'puzzle19' },
    { id: 20, name: 'Rebus 20', description: 'EN - 8', path: 'puzzle20' },
    { id: 21, name: 'Rebus 21', description: 'NL - 10', path: 'puzzle21' },
    { id: 22, name: 'Rebus 22', description: 'EN - 7', path: 'puzzle22' },
    { id: 23, name: 'Rebus 23', description: 'EN - 7', path: 'puzzle23' },
    { id: 24, name: 'Rebus 24', description: 'NL - 3', path: 'puzzle24' },
    { id: 25, name: 'Rebus 25', description: 'EN - 6', path: 'puzzle25' },
    { id: 26, name: 'Rebus 26', description: 'Secret rebus 🤫', path: 'puzzle26' },
  ];
}
