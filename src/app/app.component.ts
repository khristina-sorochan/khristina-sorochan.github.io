import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  openNav(): void {
    document.getElementById("mySidenav").style.width = "100%";
  }

  closeNav(): void {
    document.getElementById("mySidenav").style.width = "0";
  }

}
