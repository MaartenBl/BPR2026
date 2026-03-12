import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle9',
  standalone: true,
  imports: [],
  templateUrl: './puzzle9.html',
  styleUrls: ['./puzzle9.scss'],
})
export class Puzzle9 {
  rebus9 = 'assets/rebus9.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus9 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
