import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainComponent } from './components/main/main.component';
import { HorarioClasesComponent } from './components/horario-clases/horario-clases.component';
import { DirectiveDirective } from './shared/directive.directive';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from '@angular/common';
import { FormularioInicioComponent } from './components/formulario-inicio/formulario-inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    MainComponent,
    HorarioClasesComponent,
    DirectiveDirective,
    FooterComponent,
    FormularioInicioComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
