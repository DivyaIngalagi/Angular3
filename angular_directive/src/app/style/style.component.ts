import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  people: any[] = [  
    {  
      "name": "Douglas  Pace",  
      "country": 'UK'  
    },  
    {  
      "name": "Mcleod  Mueller",  
      "country": 'USA'  
    },  
    {  
      "name": "Day  Meyers",  
      "country": 'HK'  
    },  
    {  
      "name": "Aguirre  Ellis",  
      "country": 'UK'  
    },  
    {  
      "name": "Cook  Tyson",  
      "country": 'USA'  
    }  
  ];  

  getColor(country:string){
    switch(country){
      case "UK":
      return "green";
      case "USA":
      return "blue";
      case "HK":
      return "red";
    }
    return "black";
  }


}
