import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'space-invaders',
	templateUrl: './space-invaders.component.html'
})

export class SpaceComponent implements OnInit {
  public title = 'Space Invaders Clone';
  constructor() { }

  ngOnInit() {
  }

}
