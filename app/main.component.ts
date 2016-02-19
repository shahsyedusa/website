import {Component} from 'angular2/core';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {bootstrap} from 'angular2/platform/browser'

@Component({
	selector: 'main-app',
	directives: [ProjectsComponent, ContactComponent],
	templateUrl: 'app/main.component.html'
})

export class MainComponent{
	
}

bootstrap(MainComponent);