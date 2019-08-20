import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material";
import { ManageClientService } from "../manage-client.service";

@Component({
  selector: "app-manage-client-list",
  templateUrl: "./manage-client-list.component.html",
  styleUrls: ["./manage-client-list.component.scss"]
})
export class ManageClientListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openClientDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(AddClientDialogModal, {
      width: "400px",
      hasBackdrop: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

}


@Component({
  selector: "app-add-client-modal",
  templateUrl: "./add-client-modal.html",
})
// tslint:disable-next-line: component-class-suffix
export class AddClientDialogModal implements OnInit {
  formGroup: FormGroup;
  titleAlert = "This field is required";
  constructor(
    private dialogRef: MatDialogRef<AddClientDialogModal>,
    private formBuilder: FormBuilder,
    private manageClientService: ManageClientService
    ) {}

    ngOnInit() {
      this.createForm();
    }

    onCancelClick(): void {
      this.dialogRef.close();
    }

    createForm() {
      this.formGroup = this.formBuilder.group({
        name: [null, Validators.required],
        logoUrl: [null, Validators.required],
      });
    }

    onSaveClient() {
      if (!this.formGroup.valid) { return; }
      this.onCancelClick();
    }

}
