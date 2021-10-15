import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../products';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() textButton: string = '';
  @Input() btnFunction: any;
  @Input() product!: Product;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
