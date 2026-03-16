import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle26',
  standalone: true,
  imports: [],
  templateUrl: './puzzle26.html',
  styleUrls: ['./puzzle26.scss'],
})
export class Puzzle26 {
  rebus26 = 'assets/rebus26.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus26 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
