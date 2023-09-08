import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardModule, DataViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
