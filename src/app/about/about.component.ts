import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  public title = 'Home';
  public msg = 'Hello!';
  public curTitle = "Shah Syed. Cloud Architect.";
  constructor() { }

  ngOnInit() {
  }

}
