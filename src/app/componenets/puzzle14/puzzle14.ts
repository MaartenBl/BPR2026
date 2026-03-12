import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle14',
  standalone: true,
  imports: [],
  templateUrl: './puzzle14.html',
  styleUrls: ['./puzzle14.scss'],
})
export class Puzzle14 {
  rebus14 = 'assets/rebus14.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus14 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
