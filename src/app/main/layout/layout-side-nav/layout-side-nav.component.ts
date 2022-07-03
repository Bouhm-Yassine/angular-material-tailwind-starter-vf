import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'layout-side-nav',
  templateUrl: './layout-side-nav.component.html',
  styleUrls: ['./layout-side-nav.component.scss']
})
export class LayoutSideNavComponent implements OnInit {
  @ViewChild('sidenavMain') sidenavMain!: ElementRef;
  @ViewChild('logoImg') logoImg!: ElementRef;
  @ViewChild('subMenuAdmin') subMenuAdmin!: ElementRef;

  isOpen: boolean = true;
  showSubAdmin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.sidenavMain.nativeElement.classList.remove('close-nav-state');
      this.sidenavMain.nativeElement.classList.add('open-nav-state');
      this.sidenavMain.nativeElement.style = '';
      this.logoImg.nativeElement.style = '';
      this.subMenuAdmin.nativeElement.style = '';
    } else {
      this.sidenavMain.nativeElement.classList.remove('open-nav-state');
      this.sidenavMain.nativeElement.classList.add('close-nav-state');
      this.sidenavMain.nativeElement.style.width = '64px';
      this.logoImg.nativeElement.style.display = 'none';
      this.subMenuAdmin.nativeElement.style.padding = '0px';
    }
  }
}
