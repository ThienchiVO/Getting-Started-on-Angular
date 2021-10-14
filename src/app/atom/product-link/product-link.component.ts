import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-link',
  templateUrl: './product-link.component.html',
  styleUrls: ['./product-link.component.css'],
})
export class ProductLinkComponent implements OnInit {
  @Input() productName: string = '';
  @Input() productId: number = 0;
  constructor() {}

  ngOnInit() {}
}
