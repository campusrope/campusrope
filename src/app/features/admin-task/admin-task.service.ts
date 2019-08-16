import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { AdminTask } from "../../core/models/admin-task";
import { tap } from "rxjs/operators";

@Injectable()
export class AdminTaskService {
  private adminTasks = new BehaviorSubject<AdminTask[]>([]);
  public adminTasks$ = this.adminTasks.asObservable();
  constructor(private http: HttpClient) {}

  fetchAdminTasks(userID: string) {
    return this.http.get(`api/admintasks?user=${userID}`).pipe(
      tap(res => {
        console.log(res);
      })
    );
  }
}
