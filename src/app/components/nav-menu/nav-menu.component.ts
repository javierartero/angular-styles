import {
  Component,
  OnInit,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavMenuComponent implements OnInit {
  @HostBinding('class') className = 'nav-menu';
  constructor() {}

  ngOnInit(): void {}
}
