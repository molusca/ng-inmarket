import { Recipe } from './../../recipe.model';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeItemComponent implements OnInit {

  @Output() recipeEmitter = new EventEmitter<void>();
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  emitRecipe() {
    this.recipeEmitter.emit();
  }

}
