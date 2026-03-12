import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle24',
  standalone: true,
  imports: [],
  templateUrl: './puzzle24.html',
  styleUrls: ['./puzzle24.scss'],
})
export class Puzzle24 {
  rebus24 = 'assets/rebus24.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus24 = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value) {
      this.locked = false;
    }
  }
}
