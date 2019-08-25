import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { NotificationService } from "src/app/core/core.module";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState, getIsMobile } from "src/app/state";

@Component({
  selector: "app-links-dialog-modal",
  templateUrl: "./links-dialog-modal.component.html",
  styleUrls: ["./links-dialog-modal.component.scss"]
})
export class LinksDialogModalComponent implements OnInit {
  isMobile$: Observable<boolean>;

  constructor(
    public dialogRef: MatDialogRef<LinksDialogModalComponent>,
    private notificationService: NotificationService,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.isMobile$ = this.store.pipe(select(getIsMobile));
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  copyText(val: string) {
      const selBox = document.createElement("textarea");
      selBox.style.position = "fixed";
      selBox.style.left = "0";
      selBox.style.top = "0";
      selBox.style.opacity = "0";
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand("copy");
      document.body.removeChild(selBox);
      this.notificationService.success("Text Copied");
    }

    getPhoneNo(val: string) {
      return `tel:${val}`;
    }
}
