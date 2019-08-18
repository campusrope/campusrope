import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocationService } from "src/app/core/location/location.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Helpline, HelplineService } from "../helpline.service";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-helpline-edit",
  templateUrl: "./helpline-edit.component.html",
  styleUrls: ["./helpline-edit.component.scss"]
})
export class HelplineEditComponent implements OnInit {

  formGroup: FormGroup;
  selectedHelpline$: Observable<Helpline>;
  titleAlert = "This field is required";

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private helplineService: HelplineService,
    private router: Router
  ) {
    this.selectedHelpline$ = this.helplineService.selectedHelpline$;
  }

  ngOnInit() {
    this.createForm();
    this.helplineService.getHelplineById(this.route.snapshot.params.id);
    this.setSelectedHelplineData();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      headline: [null, Validators.required],
      description: [null, Validators.required],
      headlineNumber: [null, Validators.required],
      websiteLink: [null, Validators.required],
      twitterLink: [null, Validators.required],
      facebookLink: [null, Validators.required],
      fileOnlineComplaintLink: "",
      instagramLink: "",
      whatsappLink: ""
    });
  }

  setSelectedHelplineData() {
    this.selectedHelpline$.pipe( tap(helpline => {
      this.formGroup.patchValue(helpline);
    }));
  }

  goBack(): any {
    this.locationService.goBack();
  }

  onHeadlineUpdate(): any {
    if (!this.formGroup.valid) { return; }
    const data = {
      _id : this.route.snapshot.params.id,
      name: this.formGroup.value.headline,
      description: this.formGroup.value.description,
      phoneNumber: this.formGroup.value.headlineNumber,
      websiteLink: this.formGroup.value.websiteLink,
      twitterLink: this.formGroup.value.twitterLink,
      facebookLink: this.formGroup.value.facebookLink,
      fileOnlineComplaintLink: this.formGroup.value.fileOnlineComplaintLink,
      instagramLink: this.formGroup.value.instagramLink,
      whatsappLink: this.formGroup.value.whatsappLink

    };
    this.helplineService.updateHelpline(data);
    this.router.navigate(["helpline"]);
  }

}
