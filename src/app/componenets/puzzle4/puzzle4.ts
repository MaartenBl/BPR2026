import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle4',
  standalone: true,
  imports: [],
  templateUrl: './puzzle4.html',
  styleUrls: ['./puzzle4.scss'],
})
export class Puzzle4 {
  rebus4 = 'assets/rebus4.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus4 = 'assets/placeholder.png'; // Fallback image
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
