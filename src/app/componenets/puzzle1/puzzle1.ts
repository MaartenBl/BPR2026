import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle1',
  standalone: true,
  imports: [],
  templateUrl: './puzzle1.html',
  styleUrls: ['./puzzle1.scss'],
})
export class Puzzle1 {
  rebus1a = 'assets/rebus1a.png';
  rebus1b = 'assets/rebus1b.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus1a = 'assets/placeholder.png';
    this.rebus1b = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
