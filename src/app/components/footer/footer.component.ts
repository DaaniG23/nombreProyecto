import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  fecha: Date = new Date ();
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

}
