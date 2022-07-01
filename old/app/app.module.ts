import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './about/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { AppRoutingModule } from './/app-routing.module';
import { BachaoComponent } from './projects/list/bachao/bachao.component';
import { PythiaComponent } from './projects/list/pythia/pythia.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    ResumeComponent,
    BachaoComponent,
    PythiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
