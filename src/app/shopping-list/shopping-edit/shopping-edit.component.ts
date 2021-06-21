import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput;
  @ViewChild('amountInput') amountInput;

  @Output() addIngredientEmitter = new EventEmitter<Ingredient>();
  @Output() removeIngredientEmitter = new EventEmitter();
  @Output() clearListEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    this.addIngredientEmitter.emit(newIngredient);
  }

  clearList() {
    this.clearListEmitter.emit();
  }

}
