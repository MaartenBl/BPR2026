import { Component } from '@angular/core';
import { PASSPHRASES } from '../../passphrases';

@Component({
  selector: 'app-puzzle17',
  standalone: true,
  imports: [],
  templateUrl: './puzzle17.html',
  styleUrls: ['./puzzle17.scss'],
})
export class Puzzle17 {
  rebus17a = 'assets/rebus17a.png';
  rebus17b = 'assets/rebus17b.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus17a = 'assets/placeholder.png';
    this.rebus17b = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value?.trim().toUpperCase() === PASSPHRASES[16]) {
      this.locked = false;
    }
  }
}
