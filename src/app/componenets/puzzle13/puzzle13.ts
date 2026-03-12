import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle13',
  standalone: true,
  imports: [],
  templateUrl: './puzzle13.html',
  styleUrls: ['./puzzle13.scss'],
})
export class Puzzle13 {
  rebus13a = 'assets/rebus13a.png';
  rebus13b = 'assets/rebus13b.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus13a = 'assets/placeholder.png';
    this.rebus13b = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
