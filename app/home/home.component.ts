import {Component} from 'angular2/core';

interface socs {
	url: string;
	name: string;
	img: string;
}

var SOCIAL: socs[] = [
	{"url": "http://www.github.com/s37syed", "name": "GitHub", "img": "./images/github.png"},
	{"url": "https://www.hackerrank.com/s37syed", "name": "HackerRank", "img": "./images/hackerrank.png"},
	{"url": "http://www.linkedin.com/in/s37syed", "name": "LinkedIn", "img": "./images/linkedin.png"},
	{"url": "http://www.stackoverflow.com/users/2951014/s37syed", "name": "StackOverflow", "img": "./images/stacko.png"},
	{"url": "http://www.twitch.tv/shahdeys/", "name": "Twitch", "img": "./images/twitch.png"},
	{"url": "http://www.uhunt.felix-halim.net/id/326591", "name": "UVa uHunt", "img": "./images/uva.png"},
]
@Component({
	selector: 'home-component',
	templateUrl: 'app/home/home.component.html'
})

export class HomeComponent {
	public title = 'Shah Syed';
	social = SOCIAL;
}