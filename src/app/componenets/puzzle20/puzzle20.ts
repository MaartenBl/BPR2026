import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle20',
  standalone: true,
  imports: [],
  templateUrl: './puzzle20.html',
  styleUrls: ['./puzzle20.scss'],
})
export class Puzzle20 {
  rebus20 = 'assets/rebus20.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus20 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
