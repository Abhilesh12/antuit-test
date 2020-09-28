import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import * as data from '../data.json';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tabsArray: any = (data as any).tabs;
  dropDowns: any = (data as any).selection;
  color='red'

  constructor(public router: Router) { }

  ngOnInit() {
  }
  redirectTo(event) {
    this.router.navigate([event.heading]);

  }
}
