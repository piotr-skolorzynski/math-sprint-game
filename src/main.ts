import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(AppRoutingModule)],
}).catch(err => console.error(err));
