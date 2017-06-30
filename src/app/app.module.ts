import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {MyComponent1} from './components/mycomponent1.component';
import {StudentAdd} from './components/student.add.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MyComponent1, StudentAdd ],
  bootstrap:    [ AppComponent, MyComponent1, StudentAdd ]
})
export class AppModule { }
