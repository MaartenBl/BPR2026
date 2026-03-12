import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle10',
  standalone: true,
  imports: [],
  templateUrl: './puzzle10.html',
  styleUrls: ['./puzzle10.scss'],
})
export class Puzzle10 {
  rebus10 = 'assets/rebus10.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus10 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
