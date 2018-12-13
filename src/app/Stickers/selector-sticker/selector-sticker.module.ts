import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap';
import { SelectImageComponent } from './select-image/select-image.component';
import { SelectFontComponent } from './select-font/select-font.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PopoverModule.forRoot()
  ],
  declarations: [SelectImageComponent, SelectFontComponent],
  exports: [SelectImageComponent]
})
export class SelectorStickerModule { }
