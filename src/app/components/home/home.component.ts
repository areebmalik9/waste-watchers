import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  timelineSelected : String = "Daily";
  timelineButtons = ["Daily", "Weekly", "Monthly"];

  constructor() { }

  ngOnInit() {
    
  }

}
