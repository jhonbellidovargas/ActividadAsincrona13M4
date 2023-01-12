import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { SolperuPipe } from './solperu.pipe';
import { DecimalPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PrincipalModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
