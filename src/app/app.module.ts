import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {MyComponent1} from './components/mycomponent1.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MyComponent1 ],
  bootstrap:    [ AppComponent, MyComponent1 ]
})
export class AppModule { }
