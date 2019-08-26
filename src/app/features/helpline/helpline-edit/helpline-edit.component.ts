import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LocationService } from "src/app/core/location/location.service";
import { Helpline, HelplineService } from "../helpline.service";
import { StateConstantService } from "src/app/core/core.module";

@Component({
  selector: "app-helpline-edit",
  templateUrl: "./helpline-edit.component.html",
  styleUrls: ["./helpline-edit.component.scss"]
})
export class HelplineEditComponent implements OnInit {

  states: any = [];
  formGroup: FormGroup;
  selectedHelpline$: Observable<Helpline>;
  titleAlert = "This field is required";

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private helplineService: HelplineService,
    private stateConstantService: StateConstantService,
    private router: Router
  ) {
    this.selectedHelpline$ = this.helplineService.selectedHelpline$;
  }

  ngOnInit() {
    this.states = this.stateConstantService.getStates();
    this.createForm();
    this.helplineService.getHelplineById(this.route.snapshot.params.id)
    .subscribe((helpline) => {
      this.formGroup.patchValue(helpline);
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      websiteLink: [null, Validators.required],
      twitterLink: [null, Validators.required],
      facebookLink: [null, Validators.required],
      state: [null, Validators.required],
      fileOnlineComplaintLink: "",
      instagramLink: "",
      whatsappLink: ""
    });
  }


  goBack() {
    this.locationService.goBack();
  }

  onHeadlineUpdate() {
    if (!this.formGroup.valid) { return; }
    const data = {
      _id : this.route.snapshot.params.id,
      name: this.formGroup.value.name,
      description: this.formGroup.value.description,
      phoneNumber: this.formGroup.value.phoneNumber,
      websiteLink: this.formGroup.value.websiteLink,
      twitterLink: this.formGroup.value.twitterLink,
      state: this.formGroup.value.state,
      facebookLink: this.formGroup.value.facebookLink,
      fileOnlineComplaintLink: this.formGroup.value.fileOnlineComplaintLink,
      instagramLink: this.formGroup.value.instagramLink,
      whatsappLink: this.formGroup.value.whatsappLink

    };
    this.helplineService.updateHelpline(data);
    this.router.navigate(["admin", "helpline"]);
  }

}
