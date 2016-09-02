import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng'
import {AccordionModule} from 'primeng/primeng';
import { ToastrModule } from 'toastr-ng2';


@NgModule({
  imports: [
    BrowserModule,
    InputTextModule,
    CalendarModule,
    InputTextareaModule,
    AccordionModule,
    ToastrModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
