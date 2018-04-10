import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'reddit-clone',
	templateUrl: './reddit-clone.component.html'
})

export class RedditComponent implements OnInit {
  public title = 'Reddit-Clone';
  constructor() { }

  ngOnInit() {
  }

}
