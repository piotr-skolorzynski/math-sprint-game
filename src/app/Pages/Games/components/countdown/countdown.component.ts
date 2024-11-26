import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    imports: [AsyncPipe],
    selector: 'app-countdown',
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();

  private counterSubject = new BehaviorSubject<number | string>(3);
  counter$: Observable<number | string> = this.counterSubject.asObservable();

  ngOnInit(): void {
    this.countdown();
  }

  countdown(): void {
    let counter: number | string = 3;

    const interval = setInterval(() => {
      if (typeof counter === 'number' && counter > 1) {
        counter -= 1;
        this.counterSubject.next(counter);

        return;
      }

      if (typeof counter === 'number') {
        counter = 'Go!';
        this.counterSubject.next(counter);

        return;
      }

      this.closeCounter();
      clearInterval(interval);
    }, 1000);
  }

  closeCounter(): void {
    this.close.emit(true);
  }
}
