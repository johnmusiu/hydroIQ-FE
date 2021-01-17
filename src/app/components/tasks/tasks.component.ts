import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { TaskModalComponent } from '../task-modal/task-modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TaskComponent implements OnInit {
  tasks;
  selectedTask;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTasks().subscribe((data) => {
      this.tasks = data['tasks'];
    });
  }

  public selectTask(task) {
    let mod = new TaskModalComponent();
    console.log(mod);
    mod.openLg(task);
  }

}
