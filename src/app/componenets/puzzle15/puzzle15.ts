import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle15',
  standalone: true,
  imports: [],
  templateUrl: './puzzle15.html',
  styleUrls: ['./puzzle15.scss'],
})
export class Puzzle15 {
  rebus15a = 'assets/rebus15a.png';
  rebus15b = 'assets/rebus15b.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus15a = 'assets/placeholder.png';
    this.rebus15b = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
