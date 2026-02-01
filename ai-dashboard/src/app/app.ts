import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Counter } from './counter';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ai-dashboard');
  counter$!: Counter['counter$'];

  constructor(private counter: Counter) {
    this.counter$ = this.counter.counter$;
  }

  increment(): void {
    this.counter.increment();
  }

  decrement(): void {
    this.counter.decrement();
  }

}
