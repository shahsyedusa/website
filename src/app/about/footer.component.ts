import { Component, OnInit } from '@angular/core';

interface socs {
	url: string;
	name: string;
	img: string;
}

var SOCIAL: socs[] = [
	{"url": "http://www.github.com/s37syed", "name": "GitHub", "img": "assets/github.png"},
	{"url": "https://www.hackerrank.com/s37syed", "name": "HackerRank", "img": "assets/hackerrank.png"},
	{"url": "http://www.linkedin.com/in/s37syed", "name": "LinkedIn", "img": "assets/linkedin.png"},
	{"url": "http://www.stackoverflow.com/users/2951014/s37syed", "name": "StackOverflow", "img": "assets/stacko.png"},
	{"url": "http://www.twitch.tv/shahdeys/", "name": "Twitch", "img": "assets/twitch.png"},
	{"url": "http://uhunt.felix-halim.net/id/326591", "name": "UVa uHunt", "img": "assets/uva.png"},
]

@Component({
  selector: 'cust-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public social = SOCIAL;
  constructor() { }

  ngOnInit() {
  }

}
