import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() headerText: string = '';
  @Input() headerSize: number = 1;
  headerHtml: string = "";

  switch(headerSize){
    case 1:{
      this.headerHtml = "<h1>" + this.headerText + "</h1>";
      break;
    }
    case 2:{
      this.headerHtml = "<h1>" + this.headerText + "</h1>";
      break;
    }
    case 3:{
      this.headerHtml = "<h1>" + this.headerText + "</h1>";
      break;
    }
    case 4:{
      this.headerHtml = "<h1>" + this.headerText + "</h1>";
      break;
    }
    case 5:{
      this.headerHtml = "<h1>" + this.headerText + "</h1>";
      break;
    }
    case 6:{
      this.headerHtml = "<h1>" + this.headerText + "</h1>";
      break;
    }
    default:{

    } 
  }
  constructor() {}

  ngOnInit() {}
}
