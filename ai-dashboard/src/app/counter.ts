import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Counter {
  private counterSubject = new BehaviorSubject<number>(0);
  readonly counter$ = this.counterSubject.asObservable();

  getCounter(): number {
    return this.counterSubject.value;
  }

  increment(): void {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  decrement(): void {
    this.counterSubject.next(this.counterSubject.value - 1);
  }

}
