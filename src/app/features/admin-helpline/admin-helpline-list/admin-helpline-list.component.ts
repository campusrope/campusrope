import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material";
import { Helpline, HelplineService } from "../../helpline/helpline.service";
import { NotificationService, StateConstantService } from "src/app/core/core.module";
import { LinksDialogModalComponent } from "../../helpline/links-dialog-modal/links-dialog-modal.component";

@Component({
  selector: "app-admin-helpline-list",
  templateUrl: "./admin-helpline-list.component.html",
  styleUrls: ["./admin-helpline-list.component.scss"]
})
export class AdminHelplineListComponent implements OnInit {

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
