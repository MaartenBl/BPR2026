import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle6',
  standalone: true,
  imports: [],
  templateUrl: './puzzle6.html',
  styleUrls: ['./puzzle6.scss'],
})
export class Puzzle6 {
  rebus6 = 'assets/rebus6.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus6 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
