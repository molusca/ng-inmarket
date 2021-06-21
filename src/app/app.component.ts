import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public param: string = 'recipes';

  setParam(event: string) {
    this.param = event;
  }

}
