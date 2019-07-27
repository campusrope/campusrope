import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CreateAdminTask } from "src/app/core/models/admin-task";

@Injectable()
export class AdminTaskService {
  constructor(private readonly httpClient: HttpClient) {}

  createAdminTask(data: CreateAdminTask): Observable<any> {
    return this.httpClient.post("api/adminTask/create", data);
  }
}
