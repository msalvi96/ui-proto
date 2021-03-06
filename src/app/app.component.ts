import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ui-proto';
  showFiller = false;
  showingSidebar: boolean = true;
  sidebarWidth: string = "240px";

  constructor() {}

  toggleSidebar(e): void {
    e.preventDefault()
    console.log(e);
    if (!this.showingSidebar) {
      this.sidebarWidth = "240px";
      this.showingSidebar = true;

    } else {
      this.sidebarWidth = "0px";
      this.showingSidebar = false;
    }
  }
}
