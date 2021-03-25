import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent {

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
