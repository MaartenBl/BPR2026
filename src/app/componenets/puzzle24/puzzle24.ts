import { Component } from '@angular/core';
import { PASSPHRASES } from '../../passphrases';

@Component({
  selector: 'app-puzzle24',
  standalone: true,
  imports: [],
  templateUrl: './puzzle24.html',
  styleUrls: ['./puzzle24.scss'],
})
export class Puzzle24 {
  rebus24 = 'assets/rebus24.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus24 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value?.trim().toUpperCase() === PASSPHRASES[23]) {
      this.locked = false;
    }
  }
}
