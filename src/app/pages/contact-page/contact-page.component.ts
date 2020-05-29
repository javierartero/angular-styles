import {
  Component,
  OnInit,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactPageComponent implements OnInit {
  @HostBinding('class') className = 'layout-default';
  constructor() {}

  ngOnInit(): void {}
}
