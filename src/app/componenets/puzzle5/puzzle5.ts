import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle5',
  standalone: true,
  imports: [],
  templateUrl: './puzzle5.html',
  styleUrls: ['./puzzle5.scss'],
})
export class Puzzle5 {
  rebus5a = 'assets/rebus5a.png';
  rebus5b = 'assets/rebus5b.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus5a = 'assets/placeholder.png';
    this.rebus5b = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
