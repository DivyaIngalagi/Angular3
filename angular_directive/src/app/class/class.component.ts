import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  people: any[] = [  
    {  
      "name": "Douglas  Pace",  
      "country": "UK" 
    },  
    {  
      "name": "Mcleod  Mueller",  
      "country": "USA" 
    },  
    {  
      "name": "Day  Meyers",  
      "country": "HK"  
    },  
    {  
      "name": "Aguirre  Ellis",  
      "country": "UK" 
    },  
    {  
      "name": "Cook  Tyson",  
      "country": "USA"  
    }  
  ];  

}
