import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote (1, 'Two things are infinite the universe and human stupidity; and Im not sure about the universe','Albert Einstein'),
    new Quote (2, 'You only live once, but if you do it right, once is enough','Mae West'),
    new Quote (3, 'Be the change that you wish to see in the world','Mahatma Gandhi'),
    new Quote (4, 'No one can make you feel inferior without your consent','Eleanor Roosevelt'),
    new Quote (5, 'If you tell the truth, you dont have to remember anything','Mark Twain'),

  ];
  toggleDetails(index){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }


  constructor() { }

  ngOnInit() {
  }

}
