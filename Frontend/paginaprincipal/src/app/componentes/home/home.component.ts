
import { Component,OnInit,ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
    slides = [
        {'image': 'http://lorempixel.com/400/200/'}, 
        {'image': 'http://lorempixel.com/400/200/'},
        {'image': 'http://lorempixel.com/400/200/'}, 
        {'image': 'http://lorempixel.com/400/200/g'}, 
        {'image': 'http://lorempixel.com/400/200/'}
      ];
      
}
