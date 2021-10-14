import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() headerText: string = '';
  @Input() headerSize: number = 1;
  constructor() {}

  ngOnInit() {}
}
