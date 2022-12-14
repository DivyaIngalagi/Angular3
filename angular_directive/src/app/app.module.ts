import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';
import { StyleComponent } from './style/style.component';
import { ClassComponent } from './class/class.component';
import { TtClasDirective } from './tt-clas.directive';
import { TtIfDirective } from './tt-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    IfelseComponent,
    SwitchComponent,
    ForComponent,
    StyleComponent,
    ClassComponent,
    TtClasDirective,
    TtIfDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
