import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario-clases',
  templateUrl: './horario-clases.component.html',
  styleUrls: ['./horario-clases.component.css']
})
export class HorarioClasesComponent implements OnInit {

  horarios: string [] = ['09.00hs. POLE SPORT CON KAREN', '11.00hs. POLE EXÓTICO CON DAMARIS', '12.30hs. POLE SPORT CON FABIANA', '13.00hs. FLEX CON ROCIO', '14.30hs. POLE SPORT CON FLORENCIA', '16.00hs. POLE EXÓTICO CON ELENA', '17.30hs. POLE SPORT CON ALEXIA', '19.00hs. POLE SPORT CON CAROLINA', '20.30hs. FLEX CON ARIADNA'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
