import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle21',
  standalone: true,
  imports: [],
  templateUrl: './puzzle21.html',
  styleUrls: ['./puzzle21.scss'],
})
export class Puzzle21 {
  rebus21 = 'assets/rebus21.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus21 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
