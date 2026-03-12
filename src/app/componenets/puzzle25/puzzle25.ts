import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle25',
  standalone: true,
  imports: [],
  templateUrl: './puzzle25.html',
  styleUrls: ['./puzzle25.scss'],
})
export class Puzzle25 {
  rebus25 = 'assets/rebus25.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus25 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
