import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-page-header',
  templateUrl: './sub-page-header.component.html',
  styleUrls: ['./sub-page-header.component.scss']
})
export class SubPageHeaderComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

  hidemenu() {
    this.isCollapsed = true;
  }
}
