import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Albert Einstein',message:'Two things are infinite the universe and human stupidity; and Im not sure about the universe'},
    {id:2,name:'Mae West',message:'You only live once, but if you do it right, once is enough'},
    {id:3,name:'Mahatma Gandhi',message:'Be the change that you wish to see in the world'},
    {id:4,name:'Eleanor Roosevelt',message:'No one can make you feel inferior without your consent'},
    {id:5,name:'Mark Twain',message:'If you tell the truth, you dont have to remember anything'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
