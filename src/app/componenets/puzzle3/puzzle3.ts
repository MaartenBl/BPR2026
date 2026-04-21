import { Component } from '@angular/core';
import { PASSPHRASES } from '../../passphrases';

@Component({
  selector: 'app-puzzle3',
  standalone: true,
  imports: [],
  templateUrl: './puzzle3.html',
  styleUrls: ['./puzzle3.scss'],
})
export class Puzzle3 {
  rebus3 = 'assets/rebus3.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus3 = 'assets/placeholder.png'; // Fallback image
  }

  unlock(value: string) {
    if (value?.trim().toUpperCase() === PASSPHRASES[2]) {
      this.locked = false;
    }
  }
}
