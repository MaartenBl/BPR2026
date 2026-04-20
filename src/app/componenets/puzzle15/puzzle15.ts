import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle15',
  standalone: true,
  imports: [],
  templateUrl: './puzzle15.html',
  styleUrls: ['./puzzle15.scss'],
})
export class Puzzle15 {
  rebus15 = 'assets/rebus15b.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus15 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
