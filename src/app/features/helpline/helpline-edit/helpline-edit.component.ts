import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocationService } from "src/app/core/location/location.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Helpline, HelplineService } from "../helpline.service";

@Component({
  selector: "app-helpline-edit",
  templateUrl: "./helpline-edit.component.html",
  styleUrls: ["./helpline-edit.component.scss"]
})
export class HelplineEditComponent implements OnInit {

  formGroup: FormGroup;
  selectedHelpline: Helpline;
  titleAlert = "This field is required";

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private helplineService: HelplineService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.selectedHelpline = this.helplineService.getHelplineById(+this.route.snapshot.params.id);
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
    this.formGroup.patchValue({
      headline: this.selectedHelpline.headline,
      description: this.selectedHelpline.description,
      headlineNumber: this.selectedHelpline.headlineNumber,
      websiteLink: this.selectedHelpline.websiteLink,
      twitterLink: this.selectedHelpline.twitterLink,
      facebookLink: this.selectedHelpline.facebookLink,
      fileOnlineComplaintLink: this.selectedHelpline.fileOnlineComplaintLink,
      instagramLink: this.selectedHelpline.instagramLink,
      whatsappLink: this.selectedHelpline.whatsappLink
    });
  }

  goBack(): any {
    this.locationService.goBack();
  }

  onHeadlineUpdate(): any {
    if (!this.formGroup.valid) { return; }
    const data = {
      id : this.selectedHelpline.id,
      headline: this.formGroup.value.headline,
      description: this.formGroup.value.description,
      headlineNumber: this.formGroup.value.headlineNumber,
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
