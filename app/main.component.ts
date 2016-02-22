import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './home/header.component';
import {FooterComponent} from './home/footer.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {ResumeComponent} from './resume/resume.component';

@Component({
	selector: 'main-app',
	directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
	templateUrl: 'app/nav.component.html'
})

@RouteConfig([
	{
		path: '/home',
		name: 'Home',
		component: HomeComponent,
		useAsDefault: true
	},
	{
		path: '/resume',
		name: 'Resume',
		component: ResumeComponent
	},
	{
		path: '/projects/...',
		name: 'Projects',
		component: ProjectsComponent
	},
	{
		path: '/contact',
		name: 'Contact',
		component: ContactComponent
	}
])

export class MainComponent{
	
}

bootstrap(MainComponent, [
		ROUTER_PROVIDERS
	]);
