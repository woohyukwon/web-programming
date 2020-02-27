import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './about.component';

export const ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild(ROUTES),

    TooltipModule.forRoot(),
  ],
  declarations: [
    AboutComponent
  ],

  exports: [
    AboutComponent
  ],

  providers: [
  ]
})
export class AboutModule {}
