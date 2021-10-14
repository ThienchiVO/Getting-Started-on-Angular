import { Component, OnInit } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-link',
  templateUrl: './product-link.component.html',
  styleUrls: ['./product-link.component.css']
})
export class ProductLinkComponent implements OnInit {
  
  products = products;
  
  constructor() { }

  ngOnInit() {
  }

}