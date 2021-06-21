import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe 1', 'This is simply a test', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&w=1000&q=80'),
    new Recipe('A test Recipe 2', 'This is simply a test', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&w=1000&q=80')
  ];

  @Output() recipeEmitter = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  reemitRecipe(event: Recipe) {
    this.recipeEmitter.emit(event);
  }

}
