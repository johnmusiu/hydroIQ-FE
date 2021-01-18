import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getTasks() {
    return this.httpClient.get(`http://localhost:8000/api/tasks`);
  }

  public createTask(name, description, date_due) {
    return this.httpClient
      .post(`${environment.apiUrl}tasks`, { name, description, date_due })
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  public createUser(name, email, dob) {
    return this.httpClient
      .post(`${environment.apiUrl}register`, { name, email, dob })
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }
}
