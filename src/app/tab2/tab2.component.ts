import { Component, OnInit } from '@angular/core';
import * as data from '../data.json';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {
  tab2: any = (data as any).tab2;
  options = (data as any).charts;
  constructor() {}

  ngOnInit() {

  }

}
