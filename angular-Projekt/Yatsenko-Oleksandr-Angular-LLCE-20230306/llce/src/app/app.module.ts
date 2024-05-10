import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LmSeiteComponent } from './lm-seite/lm-seite.component';
import { CmSeiteComponent } from './cm-seite/cm-seite.component';
import { EmSeiteComponent } from './em-seite/em-seite.component';
import { HomeComponent } from './home/home.component';
import { LmListmodeComponent } from './lm-listmode/lm-listmode.component';
import { LmSinglemodeComponent } from './lm-singlemode/lm-singlemode.component';
import { ModalComponent } from './modal/modal.component';
import { EmSinglemodeComponent } from './em-singlemode/em-singlemode.component';
import { EmErgebnisseComponent } from './em-ergebnisse/em-ergebnisse.component';

@NgModule({
  declarations: [
    AppComponent,
    LmSeiteComponent,
    CmSeiteComponent,
    EmSeiteComponent,
    HomeComponent,
    LmListmodeComponent,
    LmSinglemodeComponent,
    ModalComponent,
    EmSinglemodeComponent,
    EmErgebnisseComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
