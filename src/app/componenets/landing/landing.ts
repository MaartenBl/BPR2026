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
    { id: 1, name: 'Rebus 1', description: 'NL (v)', path: 'puzzle1' },
    { id: 2, name: 'Rebus 2', description: 'EN / NL (e)', path: 'puzzle2' },
    { id: 3, name: 'Rebus 3', description: 'NL (e)', path: 'puzzle3' },
    { id: 4, name: 'Rebus 4', description: 'EN (n)', path: 'puzzle4' },
    { id: 5, name: 'Rebus 5', description: 'EN (k)', path: 'puzzle5' },
    { id: 6, name: 'Rebus 6', description: 'LAT (o)', path: 'puzzle6' },
    { id: 7, name: 'Rebus 7', description: 'NL (L)', path: 'puzzle7' },
    { id: 8, name: 'Rebus 8', description: 'NL (o)', path: 'puzzle8' },
    { id: 9, name: 'Rebus 9', description: 'EN / NL (n)', path: 'puzzle9' },
    { id: 10, name: 'Rebus 10', description: 'EN (i)', path: 'puzzle10' },
    { id: 11, name: 'Rebus 11', description: 'NL (a)', path: 'puzzle11' },
    { id: 12, name: 'Rebus 12', description: 'NL (a)', path: 'puzzle12' },
    { id: 13, name: 'Rebus 13', description: 'EN / NL (l)', path: 'puzzle13' },
    { id: 14, name: 'Rebus 14', description: 'NL (g)', path: 'puzzle14' },
    { id: 15, name: 'Rebus 15', description: 'EN / NL (e)', path: 'puzzle15' },
    { id: 16, name: 'Rebus 16', description: 'NL (s)', path: 'puzzle16' },
    { id: 17, name: 'Rebus 17', description: 'EN / NL (l)', path: 'puzzle17' },
    { id: 18, name: 'Rebus 18', description: 'NL (a)', path: 'puzzle18' },
    { id: 19, name: 'Rebus 19', description: 'EN / NL (c)', path: 'puzzle19' },
    { id: 20, name: 'Rebus 20', description: 'EN (h)', path: 'puzzle20' },
    { id: 21, name: 'Rebus 21', description: 'EN / NL (t)', path: 'puzzle21' },
    { id: 22, name: 'Rebus 22', description: 'EN / NL (b)', path: 'puzzle22' },
    { id: 23, name: 'Rebus 23', description: 'EN (e)', path: 'puzzle23' },
    { id: 24, name: 'Rebus 24', description: 'EN / NL (r)', path: 'puzzle24' },
    { id: 25, name: 'Rebus 25', description: 'EN (g)', path: 'puzzle25' },
  ];
}
