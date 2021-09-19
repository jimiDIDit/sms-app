import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'sms-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  @ViewChild('successModal', { static: false }) SuccessModal: ModalDirective;
  @Input() title: string = 'Success!';
  @Input() text: string = '<p class="p-3">Submission complete!</p>';
  @Input() showSuccess: boolean = false;
  @Input() callback?: (args?: any) => Promise<any>;
  constructor() { }

  ngOnInit(): void {
  }


  close() {
    if (this.callback) {
      return this.callback().then(() => {
        this.SuccessModal.hide();
      });
    } else {
      this.SuccessModal.hide();
    }
  }

}
