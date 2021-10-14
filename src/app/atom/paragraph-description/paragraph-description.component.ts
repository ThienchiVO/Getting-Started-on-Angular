import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph-description',
  templateUrl: './paragraph-description.component.html',
  styleUrls: ['./paragraph-description.component.css'],
})
export class ParagraphDescriptionComponent implements OnInit {
  @Input() textDescription: string = '';

  constructor() {}

  ngOnInit() {}
}
