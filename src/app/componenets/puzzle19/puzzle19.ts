import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle19',
  standalone: true,
  imports: [],
  templateUrl: './puzzle19.html',
  styleUrls: ['./puzzle19.scss'],
})
export class Puzzle19 {
  rebus19 = 'assets/rebus19.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus19 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
