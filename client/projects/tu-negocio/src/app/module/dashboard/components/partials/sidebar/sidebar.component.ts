import { Component, OnInit } from '@angular/core';

import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
  state
} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('childAnimation', [
      state(
        'welcome',
        style({
          backgroundColor: 'purple'
        })
      ),
      state(
        'close',
        style({
          opacity: 1,
          backgroundColor: 'white'
        })
      ),
      transition('welcome => close', [animate('3s')])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
