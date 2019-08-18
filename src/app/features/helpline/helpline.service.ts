import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface Helpline {
  _id?: string;
  name: string;
  description: string;
  phoneNumber: string;
  websiteLink: string;
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

  public helplineList$: Observable<
    Helpline[]
  > = this.helplineListSubject$.asObservable();

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

  addHelpline(helplineData: Helpline) {}

  getHelplineById(id: number) {}

  updateHelpline(updateHelplineData: Helpline) {}

}
