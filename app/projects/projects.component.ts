import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProjectListComponent} from './list/projectList/projectList.component';
import {ChatserverComponent} from './list/chatserver/chatserver.component';
import {JavapokerComponent} from './list/java-poker/java-poker.component';
import {JoypadComponent} from './list/joypad/joypad.component';
import {MappystarsComponent} from './list/mappy-stars/mappy-stars.component';
import {RedditComponent} from './list/reddit-clone/reddit-clone.component';
import {SpaceComponent} from './list/space-invaders/space-invaders.component';
import {TorcomComponent} from './list/torcom/torcom.component';

@Component({
	selector: 'projects',
	directives: [ROUTER_DIRECTIVES, ProjectListComponent, ChatserverComponent, JavapokerComponent, JoypadComponent, MappystarsComponent, RedditComponent, SpaceComponent, TorcomComponent],
	templateUrl: 'app/projects/projects.component.html'
})

@RouteConfig([
	{
		path: '/',
		name: 'ProjectList',
		component: ProjectListComponent,
		useAsDefault: true
	},
	{
		path: '/chatserver',
		name: 'Chatserver',
		component: ChatserverComponent
	},
	{
		path: '/java-poker',
		name: 'Poker',
		component: JavapokerComponent
	},
	{
		path: '/joy-pad',
		name: 'Joy',
		component: JoypadComponent
	},
	{
		path: '/mappy-stars',
		name: 'Mappy',
		component: MappystarsComponent
	},
	{
		path: '/reddit-clone',
		name: 'Reddit',
		component: RedditComponent
	},
	{
		path: '/space-invaders',
		name: 'Space',
		component: SpaceComponent
	},
	{
		path: '/torcom',
		name: 'Torcom',
		component: TorcomComponent
	}
])

export class ProjectsComponent {
}