import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentTitle = 'I am title from component.ts';
  clickHandler(){
    alert("Hello sir");
  }
}
