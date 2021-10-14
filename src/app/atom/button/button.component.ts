import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() textButton: string = '';
  @Input() btnFunction: any;
  constructor() {}

  ngOnInit() {}
}
