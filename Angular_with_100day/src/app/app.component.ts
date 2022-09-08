import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_with_100day';
  name = 'Angular' + VERSION.major;
  // currentProgress = 70; // day 7
  user = {
    name: 'Kiên ràng',
    age: 22
  };

  hander() {
    console.log();
  }
}
