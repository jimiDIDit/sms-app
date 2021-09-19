import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SuccessComponent } from './modal/success/success.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from './modal/message-modal/message-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SafeHtmlPipe, SuccessComponent, MessageModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SafeHtmlPipe,
    SuccessComponent,
    MessageModalComponent
  ]
})
export class SharedModule { }
