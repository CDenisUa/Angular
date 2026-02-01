import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Counter {
  private count = 0;

  getCounter(): number {
    return this.count
  };

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

}
