import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent implements OnInit {
  public close = output<boolean>();

  public counter = signal<number | string>(3);

  public ngOnInit(): void {
    this.countdown();
  }

  public countdown(): void {
    let counter: number | string = 3;

    const interval = setInterval(() => {
      if (typeof counter === 'number' && counter > 1) {
        counter -= 1;
        this.counter.set(counter);

        return;
      }

      if (typeof counter === 'number') {
        counter = 'Go!';
        this.counter.set(counter);

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
