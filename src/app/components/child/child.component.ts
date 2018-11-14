import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParent: number;

  @Output() countChanged = new EventEmitter();

  counter: number;

  constructor() { }

  ngOnInit() {
    this.counter = 0;
  }

  incrementCount() {
    ++this.counter;
    this.countChanged.emit(this.counter);
  }

  decrementCount() {
    --this.counter;
    this.countChanged.emit(this.counter);
  }

}
