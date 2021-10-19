import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() set control(value: FormControl) {
    if (this.control !== value) {
      this.control = value;
    }
  }
  
  constructor() {}

  ngOnInit() {}
}
