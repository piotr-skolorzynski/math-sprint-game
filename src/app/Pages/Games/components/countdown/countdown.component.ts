import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  output,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  imports: [AsyncPipe],
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent implements OnInit {
  public close = output<boolean>();

  private counterSubject = new BehaviorSubject<number | string>(3);
  public counter$: Observable<number | string> =
    this.counterSubject.asObservable();

  public ngOnInit(): void {
    this.countdown();
  }

  public countdown(): void {
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

  public closeCounter(): void {
    this.close.emit(true);
  }
}
