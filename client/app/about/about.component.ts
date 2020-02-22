import {Component, OnInit} from '@angular/core';
import * as sharedConfig from '../app.constants';
import {About} from '../../components/interfaces/About';

@Component({
  selector: 'about',
  template: require('./about.html'),
  styles: [require('./about.scss')],
})
export class AboutComponent implements OnInit {

  private about: About;
  private mailtoURL: String;
  static parameters = [];

  constructor() {
    this.about = sharedConfig.about;
    this.mailtoURL = "mailto:" + this.about.email;
  }

  ngOnInit() {
  }
}
