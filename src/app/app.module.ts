import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import {
  angleIcon,
  ClarityIcons,
  fileIcon,
  infoCircleIcon,
  timesCircleIcon,
  timesIcon,
} from '@clr/core/icon-shapes';

const iconList = [
  angleIcon,
  timesIcon,
  fileIcon,
  timesCircleIcon,
  infoCircleIcon,
];

ClarityIcons.addIcons(...iconList);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
