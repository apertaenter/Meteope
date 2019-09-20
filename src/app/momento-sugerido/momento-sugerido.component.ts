import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-momento-sugerido',
  templateUrl: './momento-sugerido.component.html',
  styleUrls: ['./momento-sugerido.component.css']
})
export class MomentoSugeridoComponent implements OnInit {

  momentoSugerido = '00:00';
  constructor() { }

  ngOnInit() {
  }

}
