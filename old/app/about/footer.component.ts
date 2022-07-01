import { Component, OnInit } from '@angular/core';

interface socs {
	url: string;
	name: string;
	img: string;
}

var SOCIAL: socs[] = [
	{"url": "https://www.github.com/shahdeys", "name": "GitHub", "img": "assets/github.png"},
	{"url": "https://stackoverflow.com/users/2951014/shah-syed", "name": "StackOverflow", "img": "assets/stacko.png"},
	{"url": "https://www.linkedin.com/in/shahdeys", "name": "LinkedIn", "img": "assets/linkedin.png"},
	{"url": "https://open.spotify.com/artist/7AZUoU8NuXIDMut0KcbSON", "name": "Spotify", "img": "assets/spotify.png"},
	{"url": "https://www.soundcloud.com/shahdeys", "name": "SoundCloud", "img": "assets/soundcloud.png"},
	{"url": "https://www.twitch.tv/shahdeys/", "name": "Twitch", "img": "assets/twitch.png"},
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
