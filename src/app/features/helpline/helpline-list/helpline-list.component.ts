import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { HelplineService, Helpline } from "../helpline.service";
import { LinksDialogModalComponent } from "../links-dialog-modal/links-dialog-modal.component";
import { NotificationService } from "src/app/core/core.module";
import { Observable } from "rxjs";
import { StateConstantService } from "src/app/core/core.module";

@Component({
  selector: "app-helpline-list",
  templateUrl: "./helpline-list.component.html",
  styleUrls: ["./helpline-list.component.scss"]
})
export class HelplineListComponent implements OnInit {

  states: any = [];
  helplineList$: Observable<Helpline[]>;

  constructor(
    private helplineService: HelplineService,
    private notificationService: NotificationService,
    private stateConstantService: StateConstantService,
    private dialog: MatDialog
  ) {
    this.helplineList$ = this.helplineService.helplineList$;
  }

  ngOnInit() {
    this.states = this.stateConstantService.getStates();
    this.helplineService.getHelplineList();
  }

  openDialog(helplineNo: string, title: string) {
    this.dialog.open(LinksDialogModalComponent, {
      width: "350px",
      data: {
        link: helplineNo,
        title
      }
    });
  }

  onDeleteHelpline(helplineToDelete: Helpline) {
    this.helplineService.deleteHelpline(helplineToDelete._id);
    this.notificationService.success("Deleted");
  }
}
