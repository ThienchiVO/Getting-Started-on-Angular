import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../products';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css'],
})
export class FicheProduitComponent implements OnInit {
  
  @Input() product!: Product;

  constructor() {}

  ngOnInit() {}

  share = () => window.alert('The product has been shared!');

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
