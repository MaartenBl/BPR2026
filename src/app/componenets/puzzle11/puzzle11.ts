import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle11',
  standalone: true,
  imports: [],
  templateUrl: './puzzle11.html',
  styleUrls: ['./puzzle11.scss'],
})
export class Puzzle11 {
  rebus11 = 'assets/rebus11.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus11 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
