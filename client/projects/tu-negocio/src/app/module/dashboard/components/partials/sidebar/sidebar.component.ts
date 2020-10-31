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
        'open',
        style({
          backgroundColor: 'green'
        })
      ),
      state(
        'close',
        style({
          backgroundColor: 'blue'
        })
      ),
      transition('* => *', [animate('2s')])
    ]),
  ]
})
export class SidebarComponent implements OnInit {

  animated =  false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAnim() {
    console.log('Toggle anim');
    this.animated = !this.animated;
  }

}
