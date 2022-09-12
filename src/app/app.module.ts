import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadeComponent } from './components/heade/heade.component';
import { ManyComponent } from './components/many/many.component';
import { FootComponent } from './components/foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadeComponent,
    ManyComponent,
    FootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
