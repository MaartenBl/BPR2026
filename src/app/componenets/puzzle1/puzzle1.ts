import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PASSPHRASES } from '../../passphrases';

@Component({
  selector: 'app-puzzle1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './puzzle1.html',
  styleUrls: ['./puzzle1.scss'],
})
export class Puzzle1 {
  rebus1a = 'assets/rebus1a.png';
  locked = true;

  handleImageError() {
    console.error('Failed to load rebus image');
    this.rebus1a = 'assets/placeholder.png';
  }

  unlock(value: string) {
    if (value?.trim().toUpperCase() === PASSPHRASES[0]) {
      this.locked = false;
    }
  }
}
