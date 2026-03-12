import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle7',
  standalone: true,
  imports: [],
  templateUrl: './puzzle7.html',
  styleUrls: ['./puzzle7.scss'],
})
export class Puzzle7 {
  rebus7 = 'assets/rebus7.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus7 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
