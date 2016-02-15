import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
	selector: 'dynamic-content',
	template: `
	<div>
		<p>testing 123</p>
	</div>
	`
})

class Main {
}

bootstrap(Main);