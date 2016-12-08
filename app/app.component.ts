import { Component } from '@angular/core';
import { IntroComponent } from 'intro.component'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'component.html',
})
export class AppComponent  { name = 'Angular'; }
