import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BachaoComponent} from './list/bachao/bachao.component';
import {PythiaComponent} from './list/pythia/pythia.component';
const projectRoutes: Routes = [
	{
		path: 'bachao',
		component: BachaoComponent
	},
	{
		path: 'pythia',
		component: PythiaComponent
	}
];

@NgModule({
  imports: [ RouterModule.forRoot(projectRoutes) ],
  exports: [ RouterModule ]
})
export class ProjectsComponent {}
