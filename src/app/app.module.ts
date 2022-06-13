import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainComponent } from './components/main/main.component';
import { HorarioClasesComponent } from './components/horario-clases/horario-clases.component';
import { DirectiveDirective } from './shared/directive.directive';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    MainComponent,
    HorarioClasesComponent,
    DirectiveDirective,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
