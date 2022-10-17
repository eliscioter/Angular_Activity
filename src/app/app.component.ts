import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Gabriel Luis P. Sabater';

  getContent() {
    return 'Code stp by step'
  }
}
