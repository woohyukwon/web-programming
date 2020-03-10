import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RecipesComponent } from './recipes.component';

import { CreateReviewComponent } from '../../components/modals/create-review.component';
import { CreateReviewModule } from '../../components/modals/create-review.module';
import { ReviewService } from '../../components/services/review.service';

export const ROUTES: Routes = [
  { path: 'recipes/:id', component: RecipesComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CreateReviewModule,
    RouterModule.forChild(ROUTES),

    TooltipModule.forRoot(),
  ],
  declarations: [
    RecipesComponent
  ],

  exports: [
    RecipesComponent,
  ],

  providers: [
    ReviewService,
  ]
})
export class RecipesModule {}
