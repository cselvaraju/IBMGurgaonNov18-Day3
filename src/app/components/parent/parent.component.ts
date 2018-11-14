import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentValue: number;
  childCount: number;

  constructor() { }

  ngOnInit() {
    this.parentValue = 0;
    this.childCount = NaN;
  }

  getChildCount(event) {
    this.childCount = event;
  }
}
