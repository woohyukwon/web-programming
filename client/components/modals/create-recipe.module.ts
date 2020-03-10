import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';
import {CreateRecipeComponent} from './create-recipe.component';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CreateRecipeComponent
  ],

  exports: [
    CreateRecipeComponent,
  ],

  providers: [
  ],

  entryComponents: [
    CreateRecipeComponent,
  ]
})
export class CreateRecipeModule {
}
