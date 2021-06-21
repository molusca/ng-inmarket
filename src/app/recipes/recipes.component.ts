import { Recipe } from './recipe.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesComponent implements OnInit {

  public selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  showRecipeDetail(event) {
    this.selectedRecipe = event;
  }

}
