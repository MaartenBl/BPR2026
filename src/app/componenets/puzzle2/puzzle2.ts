import { Component } from '@angular/core';
import { PASSPHRASES } from '../../passphrases';

@Component({
  selector: 'app-puzzle2',
  standalone: true,
  imports: [],
  templateUrl: './puzzle2.html',
  styleUrls: ['./puzzle2.scss'],
})
export class Puzzle2 {
  rebus2 = 'assets/rebus2.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus2 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value?.trim().toUpperCase() === PASSPHRASES[1]) {
      this.locked = false;
    }
  }
}
