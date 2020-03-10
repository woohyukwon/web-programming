import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {UpdateRecipeComponent} from './update-recipe.component';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    UpdateRecipeComponent
  ],

  exports: [
    UpdateRecipeComponent,
  ],

  providers: [
  ],

  entryComponents: [
    UpdateRecipeComponent,
  ]
})
export class UpdateRecipeModule {
}
