import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'moja',message:'Watch finding Nemoo'},
    {id:2,name:'mbili',message:'Buy Cookies'},
    {id:3,name:'tatu',message:'Get new Phone Case'},
    {id:4,name:'nne',message:'Get Dog Food'},
    {id:5,name:'tano',message:'Solve math homework'},
    {id:6,name:'sita',message:'dfgjhfgj'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

/*export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'online version'),
    new Quote(2,'Buy Cookies','parrot'),
    new Quote(3,'Get new Phone Case','up soon'),
    new Quote(4,'Get Dog Food','expensive snacks'),
    new Quote(5,'Solve maths homework','Damn Math'),
    new Quote(6,'Plot my world domination plan','evil overlord'),
     ];

  constructor() { }

  ngOnInit() {
  }

}*/
