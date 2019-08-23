import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface Client {
  _id?: string;
  name: string;
  logoUrl: string;
}

@Injectable({
  providedIn: "root"
})
export class ManageClientService {

  private readonly manageClientListSubject$ = new BehaviorSubject<Client[]>([]);

  public manageClientList$: Observable<Client[]> = this.manageClientListSubject$.asObservable();

  constructor(private http: HttpClient) {}

  getClients() {
    this.http.get("api/clients").subscribe((res: any) => {
      this.manageClientListSubject$.next(res);
    });
  }

  deleteClient(id: string) {
    this.http.delete(`api/clients/${id}`).subscribe((res: any) => {
      const filteredClients = this.manageClientListSubject$
      .getValue()
      .filter((client) => client._id  !== id)
      .slice();

      this.manageClientListSubject$.next(filteredClients);
    });
  }

  addClient(clientData: Client) {
    this.http.post(`api/clients`, clientData).subscribe((res: any) => {
      const clients = this.manageClientListSubject$
      .getValue()
      .concat([res]);

      this.manageClientListSubject$.next(clients);
    });
  }

}
