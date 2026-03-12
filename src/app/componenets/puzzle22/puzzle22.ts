import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle22',
  standalone: true,
  imports: [],
  templateUrl: './puzzle22.html',
  styleUrls: ['./puzzle22.scss'],
})
export class Puzzle22 {
  rebus22 = 'assets/rebus22.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus22 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
