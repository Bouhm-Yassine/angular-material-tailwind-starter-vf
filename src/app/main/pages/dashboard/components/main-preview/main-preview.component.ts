import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-main-preview',
  templateUrl: './main-preview.component.html',
  styleUrls: ['./main-preview.component.scss']
})
export class MainPreviewComponent implements OnInit {
  activeTab!: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleTabChange(tab: MatTabChangeEvent) {
    this.activeTab = tab.tab.ariaLabel;
  }
}
