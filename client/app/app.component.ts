import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';


@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor() {
    setTheme('bs3'); // or 'bs4'
  }
  }
