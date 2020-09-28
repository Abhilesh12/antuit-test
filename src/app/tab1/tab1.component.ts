import { Component, OnInit } from '@angular/core';
import * as data from '../data.json';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {
  tab1: any = (data as any).tab1;

  constructor() { }

  ngOnInit() {
  }

}
