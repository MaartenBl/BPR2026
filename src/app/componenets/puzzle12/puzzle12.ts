import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle12',
  standalone: true,
  imports: [],
  templateUrl: './puzzle12.html',
  styleUrls: ['./puzzle12.scss'],
})
export class Puzzle12 {
  rebus12 = 'assets/rebus12.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus12 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
