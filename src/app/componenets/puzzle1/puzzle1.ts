import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle1',
  standalone: true,
  imports: [],
  templateUrl: './puzzle1.html',
  styleUrls: ['./puzzle1.scss'],
})
export class Puzzle1 {
  rebus1 = 'assets/rebus1.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus1 = 'assets/placeholder.png'; // Fallback image
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
