import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AllahComponent } from './allah.component';
import { JesusComponent } from './jesus.component';

import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,HttpModule,JsonpModule ],
  declarations: [ AppComponent,AllahComponent,JesusComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
