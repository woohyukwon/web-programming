import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import {RouterModule, Routes} from '@angular/router';

import {TooltipModule} from 'ngx-bootstrap';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MainComponent} from './main.component';
import {SquarePipe} from '../../components/pipes/square.pipe';
import {UserService} from '../../components/services/user.service';
import {UpdateUserModule} from '../../components/modals/update-user.module';

export const ROUTES: Routes = [
  {path: 'home', component: MainComponent},
];

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    UpdateUserModule,
    RouterModule.forChild(ROUTES),

    TooltipModule.forRoot(),
  ],
  declarations: [
    MainComponent,
    SquarePipe,
  ],

  exports: [
    MainComponent,
  ],

  providers: [
    UserService,
  ],

  entryComponents: [
  ]
})
export class MainModule {
}
