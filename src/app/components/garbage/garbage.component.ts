import { Component, OnInit } from '@angular/core';
import { GarbageService } from '../../services/garbage.service'
import { Garbage } from '../../models/Garbage'

@Component({
  selector: 'app-garbage',
  templateUrl: './garbage.component.html',
  styleUrls: ['./garbage.component.css']
})
export class GarbageComponent implements OnInit {
  garbage: Garbage[];
  constructor(private garbageService: GarbageService) { }

  ngOnInit() {
  	this.garbageService.getGarbage().subscribe(garbage => {
  		console.log(garbage);
  		this.garbage = garbage;

  	});
  }

}
