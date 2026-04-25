import { Component } from '@angular/core';
import { PASSPHRASES } from '../../passphrases';

@Component({
  selector: 'app-haiku',
  imports: [],
  templateUrl: './haiku.html',
  styleUrl: './haiku.scss',
})
export class Haiku {
  locked = true;

  unlock(value: string) {
    if (value?.trim().toUpperCase() === PASSPHRASES[25]) {
      this.locked = false;
    }
  }
}
