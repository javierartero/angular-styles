import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @HostBinding('class') className = 'nav-menu';
  constructor() {}

  ngOnInit(): void {}
}
