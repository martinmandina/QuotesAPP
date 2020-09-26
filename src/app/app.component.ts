import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 export class AppComponent {
     quotes:Quote[] = [
      new Quote(1, 'iko sawa','kesh'),
      new Quote(2, 'iko sawa','kesh'),
      new Quote(3, 'iko sawa','kesh'),
      new Quote(4, 'iko sawa','kesh'),
      new Quote(5, 'iko sawa','kesh'),
      new Quote(6, 'iko sawa','kesh'),
      new Quote(7, 'iko sawa','kesh'),
     ];


 }
