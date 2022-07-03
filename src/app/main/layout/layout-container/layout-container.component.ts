import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {
  @HostBinding('class') className = '';
  opened: boolean = true;
  isDarkMode!: boolean;
  toggleControl = new FormControl(false);

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDrawer() {
    this.opened = !this.opened;
  }

  darkMode(darkMode: boolean) {
    this.isDarkMode = darkMode
    const darkClassName = 'dark-mode';
    this.className = darkMode ? darkClassName : '';
  }
}
