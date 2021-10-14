import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  @Input() linkName: string = '';
  @Input() linkId: number = 0;
  constructor() {}

  ngOnInit() {}
}
