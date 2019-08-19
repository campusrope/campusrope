import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface Helpline {
  _id?: string;
  name: string;
  description: string;
  phoneNumber: string;
  websiteLink: string;
  state: string;
  twitterLink: string;
  facebookLink: string;
  fileOnlineComplaintLink: string;
  instagramLink: string;
  whatsappLink: string;
}

@Injectable({
  providedIn: "root"
})
export class HelplineService {
  private readonly helplineListSubject$ = new BehaviorSubject<Helpline[]>([]);
  private readonly selectedHelplineSubject$ = new BehaviorSubject<Helpline>(null);

  public helplineList$: Observable<
    Helpline[]
  > = this.helplineListSubject$.asObservable();

  public selectedHelpline$: Observable<Helpline> = this.selectedHelplineSubject$.asObservable();

  constructor(private http: HttpClient) {}

  getHelplineList() {
    this.http.get("api/helplines").subscribe((res: any) => {
      this.helplineListSubject$.next(res);
    });
  }

  deleteHelpline(id: string) {
    this.http.delete(`api/helplines/${id}`).subscribe((res: any) => {
      const filteredHelplines = this.helplineListSubject$
      .getValue()
      .filter((helpline) => helpline._id  !== id)
      .slice();

      this.helplineListSubject$.next(filteredHelplines);
    });
  }

  addHelpline(helplineData: Helpline) {
    this.http.post(`api/helplines`, helplineData).subscribe((res: any) => {
      const helplines = this.helplineListSubject$
      .getValue()
      .concat([res])
      .slice();
      this.helplineListSubject$.next(helplines);
    });
  }

  getHelplineById(id: number) {
    this.http.get(`api/helplines/${id}`).subscribe((helpline: any) => {
      this.selectedHelplineSubject$.next(helpline);
    });
  }

  updateHelpline(updateHelplineData: Helpline) {
    this.http.put(`api/helplines/${updateHelplineData._id}`, updateHelplineData).subscribe((helpline: any) => {
      this.selectedHelplineSubject$.next(null);
    });
  }

}
