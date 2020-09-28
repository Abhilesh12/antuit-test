import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Tab1Component} from './tab1/tab1.component';
import {Tab2Component} from './tab2/tab2.component';
import {Tab3Component} from './tab3/tab3.component';
import {HeaderComponent} from './header/header.component';


const routes: Routes = [
  { path: '',  component: HeaderComponent },
  { path: 'Tab1',  component: Tab1Component },
  { path: 'Tab2',  component: Tab2Component },
  { path: 'Tab3',  component: Tab3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
