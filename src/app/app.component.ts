import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "santanu's";
  name = "santanu kumar paikaray"

  displayName(){
    return this.name;
  }
}
