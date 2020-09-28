import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as data from '../data.json';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css']
})
export class Tab3Component implements OnInit {
  tab3: any = (data as any).tab3;
  tabsButton: any = (data as any).tabsButton;

  constructor(public router: Router) { }

  ngOnInit() {
  }
  redirectTo() {
    this.router.navigate(['Tab1']);

  }
}
