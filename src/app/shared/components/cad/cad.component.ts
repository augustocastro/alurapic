import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.component.html',
  styleUrls: ['./cad.component.css']
})
export class CadComponent implements OnInit {

  @Input()
  public tittle: string;

  constructor() { }

  ngOnInit() {
  }

}
