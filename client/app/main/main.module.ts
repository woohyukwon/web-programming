import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main.component';
import { RecipeService } from '../../components/services/recipe.service';
import { CreateRecipeModule } from '../../components/modals/create-recipe.module';
import { UpdateRecipeModule } from '../../components/modals/update-recipe.module';
import { UserService } from '../../components/services/user.service';
import { CreateUserModule } from '../../components/modals/create-user.module';
import { UpdateUserModule } from '../../components/modals/update-user.module';




export const ROUTES: Routes = [
    { path: 'home', component: MainComponent },
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        CreateRecipeModule,
        UpdateRecipeModule,
        CreateUserModule,
        UpdateUserModule,
        RouterModule.forChild(ROUTES),


        TooltipModule.forRoot(),
    ],
    declarations: [
        MainComponent,
    ],

    exports: [
        MainComponent,
    ],
    providers: [
       RecipeService,
       UserService,
    ],
    entryComponents: [
    ]
})

export class MainModule {}
