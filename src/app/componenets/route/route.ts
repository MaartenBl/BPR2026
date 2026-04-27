import { Component } from '@angular/core';
import { PASSPHRASES } from '../../passphrases';

@Component({
  selector: 'app-finish-route',
  standalone: true,
  imports: [],
  templateUrl: './route.html',
  styleUrls: ['./route.scss'],
})
export class Route {
  locked = true;

  unlock(value: string) {
    if (value?.trim().toUpperCase() === PASSPHRASES[26]) {
      this.locked = false;
    }
  }
}
