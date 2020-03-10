import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../../components/services/recipe.service';
import {UserService} from '../../components/services/user.service';
import {Recipe} from '../../components/interfaces/Recipe';
import {User} from '../../components/interfaces/User';
import {BsModalService} from 'ngx-bootstrap';
import {CreateRecipeComponent} from '../../components/modals/create-recipe.component';
import {UpdateRecipeComponent} from '../../components/modals/update-recipe.component';
import {CreateUserComponent} from '../../components/modals/create-user.component';
import {UpdateUserComponent} from '../../components/modals/update-user.component';



@Component({
    selector: 'main',
    template: require('./main.html'),
    styles: [require('./main.scss')],
})
export class MainComponent implements OnInit {

    private recipes: Recipe[];
    private users: User[];
    private values: string[];
    static parameters = [HttpClient, RecipeService, UserService, BsModalService];

    constructor(private http: HttpClient, private recipeService: RecipeService, private userService: UserService, private modalService: BsModalService) {
        this.http = http;
        this.recipeService = recipeService;
        this.userService = userService;
        this.modalService = modalService;
        this.getRecipeData();
        this.getUserData();
    }


    public getRecipeData() {
      this.recipeService.getAllRecipes()
        .then(response => {
          this.recipes = response.recipes as Recipe[];
        })
        .catch(this.handleError);
    }

    public createRecipe() {
      const modalRef = this.modalService.show(CreateRecipeComponent);
      modalRef.content.recipeToCreate.subscribe(recipeToCreate => {
        this.recipeService.createRecipe(recipeToCreate)
          .then(createdRecipe => {
            modalRef.content.formInfo = `Recipe created!`;
          })
          .catch(err => {
            console.log(err);
            modalRef.content.formError = err.error.message;
          });
      });
    }

  public editRecipe(recipe: Recipe) {
    const initialState = {
      recipe
    }
    const modalRef = this.modalService.show(UpdateRecipeComponent, {initialState});
    modalRef.content.updatedRecipe.subscribe(() => {
      this.recipeService.updateRecipe(recipe)
        .then(updatedRecipe => {
          modalRef.content.formInfo = `Recipe updated!`;
        })
        .catch(err => {
          console.log(err);
          modalRef.content.formError = err.error.message;
        });
    });
  }

  public deleteRecipe(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe._id)
      .catch(err => {
        console.log(err);
      });
  }

  public getUserData() {
    this.userService.getAllUsers()
      .then(response => {
        this.users = response.users as User[];
      })
      .catch(this.handleError);
  }

  public createUser() {
    const modalRef = this.modalService.show(CreateUserComponent);
    modalRef.content.userToCreate.subscribe(userToCreate => {
      this.userService.createUser(userToCreate)
        .then(createdUser => {
          modalRef.content.formInfo = `User created!`;
        })
        .catch(err => {
          console.log(err);
          modalRef.content.formError = err.error.message;
        });
    });
  }

public editUser(user: User) {
  const initialState = {
    user
  }
  const modalRef = this.modalService.show(UpdateUserComponent, {initialState});
  modalRef.content.updatedUser.subscribe(() => {
    this.userService.updateUser(user)
      .then(updatedUser => {
        modalRef.content.formInfo = `User updated!`;
      })
      .catch(err => {
        console.log(err);
        modalRef.content.formError = err.error.message;
      });
  });
}

public deleteUser(user: User) {
  this.userService.deleteUser(user._id)
    .catch(err => {
      console.log(err);
    });
}

    private handleError(error: any): Promise<any> {
      console.error('Something has gone wrong', error);
      return Promise.reject(error.message || error);
    }

    ngOnInit() {
    }

}
