import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatserverComponent} from './list/chatserver/chatserver.component';
import {JavapokerComponent} from './list/java-poker/java-poker.component';
import {JoypadComponent} from './list/joypad/joypad.component';
import {MappystarsComponent} from './list/mappy-stars/mappy-stars.component';
import {RedditComponent} from './list/reddit-clone/reddit-clone.component';
import {SpaceComponent} from './list/space-invaders/space-invaders.component';
import {TorcomComponent} from './list/torcom/torcom.component';

const projectRoutes: Routes = [
	{
		path: 'chatserver',
		component: ChatserverComponent
	},
	{
		path: 'java-poker',
		component: JavapokerComponent
	},
	{
		path: 'joy-pad',
		component: JoypadComponent
	},
	{
		path: 'mappy-stars',
		component: MappystarsComponent
	},
	{
		path: 'reddit',
		component: RedditComponent
	},
	{
		path: 'space',
		component: SpaceComponent
	},
	{
		path: 'torcom',
		component: TorcomComponent
	}
];

@NgModule({
  imports: [ RouterModule.forRoot(projectRoutes) ],
  exports: [ RouterModule ]
})
export class ProjectsComponent {}
