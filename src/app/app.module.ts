import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './about/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { AppRoutingModule } from './/app-routing.module';
import {ChatserverComponent} from './projects/list/chatserver/chatserver.component';
import {JavapokerComponent} from './projects/list/java-poker/java-poker.component';
import {JoypadComponent} from './projects/list/joypad/joypad.component';
import {MappystarsComponent} from './projects/list/mappy-stars/mappy-stars.component';
import {RedditComponent} from './projects/list/reddit-clone/reddit-clone.component';
import {SpaceComponent} from './projects/list/space-invaders/space-invaders.component';
import {TorcomComponent} from './projects/list/torcom/torcom.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    ResumeComponent,
    ChatserverComponent,
    JavapokerComponent,
    JoypadComponent,
    MappystarsComponent,
    RedditComponent,
    SpaceComponent,
    TorcomComponent
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
