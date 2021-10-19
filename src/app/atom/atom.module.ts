import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { LabelComponent } from './label/label.component';
import { LinkComponent } from './link/link.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { SpanComponent } from './span/span.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    HeaderComponent,
    LabelComponent,
    LinkComponent,
    ParagraphComponent,
    SpanComponent,
    InputComponent,
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    LabelComponent,
    LinkComponent,
    ParagraphComponent,
    SpanComponent,
    InputComponent,
  ],
})
export class AtomModule {}
