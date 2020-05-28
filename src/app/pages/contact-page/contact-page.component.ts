import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  @HostBinding('class') className = 'layout-default';
  constructor() {}

  ngOnInit(): void {}
}
