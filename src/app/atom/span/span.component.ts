import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-span',
  templateUrl: './span.component.html',
  styleUrls: ['./span.component.css'],
})
export class SpanComponent implements OnInit {
  @Input() spanText: any = '';

  constructor() {}

  ngOnInit() {}
}
