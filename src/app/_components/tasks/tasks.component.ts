import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TaskComponent implements OnInit {
  tasks;
  selectedTask;

  constructor(private apiService: ApiService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.apiService.getTasks().subscribe((data) => {
      this.tasks = data['tasks'];
    });
  }

  public selectTask(task) {
    this.modalService.open('task', { size: 'lg' });
  }

}
