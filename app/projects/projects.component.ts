import {Component} from 'angular2/core';
import {ChatserverComponent} from './list/chatserver/chatserver.component';
import {JavapokerComponent} from './list/java-poker/java-poker.component';
import {JoypadComponent} from './list/joypad/joypad.component';
import {MappystarsComponent} from './list/mappy-stars/mappy-stars.component';
import {RedditComponent} from './list/reddit-clone/reddit-clone.component';
import {SpaceComponent} from './list/space-invaders/space-invaders.component';
import {TorcomComponent} from './list/torcom/torcom.component';

interface PROJECTS {
	url: string;
	name: string;
}

var projectList: PROJECTS[] = [
	{"url": "<chatserver></chatserver>", "name": "chatserver"},
	{"url": "<java-poker></java-poker>", "name": "java-poker"}, 
	{"url": "<joy-pad></joy-pad>", "name": "joy-pad"}, 
	{"url": "<mappy-stars></mappy-stars>", "name": "mappy-stars"}, 
	{"url": "<reddit-clone></reddit-clone>", "name": "space-invaders"},  
	{"url": "<space-invaders></space-invaders>", "name": "torcom"}
];

@Component({
	selector: 'projects',
	directives: [ChatserverComponent, JavapokerComponent, JoypadComponent, MappystarsComponent, RedditComponent, SpaceComponent, TorcomComponent],
	templateUrl: 'app/projects/projects.component.html'
})

export class ProjectsComponent {
	public title = 'Projects Page';
	project = projectList;
}

