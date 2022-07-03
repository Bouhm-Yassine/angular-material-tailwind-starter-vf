import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

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
  pageList: string[] = [];
  constructor(private router: Router) {
    router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        this.pageList = []
        this.pageList = this.pageList.concat(event.url.substring(1).split('/').slice().filter((item) => item !== ''))
      }
    })
  }

  ngOnInit(): void {
  }

  toggleDrawer() {
    this.opened = !this.opened;
  }

}
