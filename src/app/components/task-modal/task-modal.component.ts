import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `,
  ],
})

export class TaskModalComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}


  openLg(task) {
    console.log(this.modalService);
    this.modalService.open(task, { size: 'lg' });
  }
}
