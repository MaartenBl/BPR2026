import { Component } from '@angular/core';
import { PASSPHRASES } from '../../passphrases';

@Component({
  selector: 'app-puzzle23',
  standalone: true,
  imports: [],
  templateUrl: './puzzle23.html',
  styleUrls: ['./puzzle23.scss'],
})
export class Puzzle23 {
  rebus23 = 'assets/rebus23.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus23 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value?.trim().toUpperCase() === PASSPHRASES[22]) {
      this.locked = false;
    }
  }
}
