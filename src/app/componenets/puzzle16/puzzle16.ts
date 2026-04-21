import { Component } from '@angular/core';
import { PASSPHRASES } from '../../passphrases';

@Component({
  selector: 'app-puzzle16',
  standalone: true,
  imports: [],
  templateUrl: './puzzle16.html',
  styleUrls: ['./puzzle16.scss'],
})
export class Puzzle16 {
  rebus16 = 'assets/rebus16.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus16 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value?.trim().toUpperCase() === PASSPHRASES[15]) {
      this.locked = false;
    }
  }
}
