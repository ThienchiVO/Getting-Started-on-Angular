import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() headerText: string = "";
  @Input() headerSize: number = 1;
  headerHtml: string = "";
  
  constructor() {}

  ngOnInit() {
    switch (this.headerSize) {
      case 1: {
        this.headerHtml = "<h1>" + this.headerText + "</h1>";
        break;
      }
      case 2: {
        this.headerHtml = "<h2>" + this.headerText + "</h2>";
        break;
      }
      case 3: {
        this.headerHtml = "<h3>" + this.headerText + "</h3>";
        break;
      }
      case 4: {
        this.headerHtml = "<h4>" + this.headerText + "</h4>";
        break;
      }
      case 5: {
        this.headerHtml = "<h5>" + this.headerText + "</h5>";
        break;
      }
      case 6: {
        this.headerHtml = "<h6>" + this.headerText + "</h6>";
        break;
      }
      default: {
        this.headerHtml = "La taille du titre doit être comprise entre 1 et 6";
      }
    }
  }
}
