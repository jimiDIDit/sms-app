import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'sms-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {
  @ViewChild('messageModal', { static: false }) MessageModal: ModalDirective;
  @Input() type: string = 'success';
  @Input() title: string = 'Success!';
  @Input() text: string = '<p class="p-3">Submission complete!</p>';
  @Input() showMessage: boolean = false;
  @Input() callback?: (args?: any) => Promise<any>;
  constructor() { }

  ngOnInit(): void {
  }


  close() {
    if (this.callback) {
      return this.callback().then(() => {
        this.MessageModal.hide();
      });
    } else {
      this.MessageModal.hide();
    }
  }

}
