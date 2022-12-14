import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isShown:boolean=false;//hidden by default
  toggleShow(){
    console.log(this.isShown);
    this.isShown=!this.isShown;
    console.log(this.isShown);
  }
}
