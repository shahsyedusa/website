import {Component} from 'angular2/core';
import {ChatserverComponent} from './list/chatserver/chatserver.component';
import {JavapokerComponent} from './list/java-poker/java-poker.component';
import {JoypadComponent} from './list/joypad/joypad.component';
import {MappystarsComponent} from './list/mappy-stars/mappy-stars.component';
import {RedditComponent} from './list/reddit-clone/reddit-clone.component';
import {SpaceComponent} from './list/space-invaders/space-invaders.component';
import {TorcomComponent} from './list/torcom/torcom.component';

var projectList: string[] = [
	"chatserver",
	"java-poker", 
	"joy-pad", 
	"mappy-stars", 
	"space-invaders",  
	"torcom"
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

