import { Component, OnInit } from '@angular/core';
import * as data from '../data.json';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  colors = 'black';
  count = 0;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  currentPage = 1;
  itemsArray: any = (data as any).itemArray;
  iconsData: any = (data as any).default;

  constructor() { }

  ngOnInit() {
  }
  changeState() {
      this.count++;
     if(this.count === 4) {
       this.count = 0;
     }
  }
  changeState1() {
    this.count1++;
    if (this.count1 === 4) {
      this.count1 = 0;
    }
  }
  changeState2() {
    this.count2++;
    if (this.count2 === 4) {
      this.count2 = 0;
    }
  }
  changeState3() {
    this.count3++;
    if (this.count3 === 4) {
      this.count3 = 0;
    }
  }
}
