import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle18',
  standalone: true,
  imports: [],
  templateUrl: './puzzle18.html',
  styleUrls: ['./puzzle18.scss'],
})
export class Puzzle18 {
  rebus18 = 'assets/rebus18.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus18 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
