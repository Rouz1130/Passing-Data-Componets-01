import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Interaction Parent to Child';
  Counter = 5;

  increment() {
    this.Counter++;
  }

  decrement() {
    this.Counter--;
  }

}
