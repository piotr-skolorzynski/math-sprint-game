import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataViewLayoutOptions } from 'primeng/dataview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
