import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from './about/about.component';
import {FooterComponent} from './about/footer.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {ResumeComponent} from './resume/resume.component';

@Component({
	selector: 'main-app',
	directives: [ROUTER_DIRECTIVES, FooterComponent],
	templateUrl: 'app/nav.component.html'
})

@RouteConfig([
	{
		path: '/',
		name: 'About',
		component: AboutComponent,
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
	title = "Shah Syed";
	
}

bootstrap(MainComponent, [
		ROUTER_PROVIDERS
	]);
