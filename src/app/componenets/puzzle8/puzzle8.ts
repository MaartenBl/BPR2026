import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle8',
  standalone: true,
  imports: [],
  templateUrl: './puzzle8.html',
  styleUrls: ['./puzzle8.scss'],
})
export class Puzzle8 {
  rebus8 = 'assets/rebus8.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus8 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
