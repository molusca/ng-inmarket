import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
