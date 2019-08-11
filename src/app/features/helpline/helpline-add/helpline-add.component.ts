import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocationService } from "src/app/core/location/location.service";
import { HelplineService, Helpline } from "../helpline.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-helpline-add",
  templateUrl: "./helpline-add.component.html",
  styleUrls: ["./helpline-add.component.scss"]
})
export class HelplineAddComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert = "This field is required";

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private helplineService: HelplineService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
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

  goBack(): any {
    this.locationService.goBack();
  }

  onHeadlineAdd(): any {
    if (!this.formGroup.valid) { return; }
    const data: Helpline = {
      id : this.helplineService.getHelplineList().length + 1,
      headline: this.formGroup.value.headline,
      description: this.formGroup.value.description,
      headlineNumber: this.formGroup.value.headlineNumber,
      websiteLink: this.formGroup.value.websiteLink,
      twitterLink: this.formGroup.value.twitterLink,
      facebookLink: this.formGroup.value.facebookLink,
      fileOnlineComplaintLink: this.formGroup.value.fileOnlineComplaintLink,
      instagramLink: this.formGroup.value.instagramLink,
      whatsappLink: this.formGroup.value.whatsappLink,
    };
    this.helplineService.addHelpline(data);
    this.router.navigate(["helpline"]);
  }
}
