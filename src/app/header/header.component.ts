import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Output() paramEmitter = new EventEmitter<string>();
  public collapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  setParam(param: string) {
    this.paramEmitter.emit(param);
  }

}
