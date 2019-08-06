import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-topic-list",
  templateUrl: "./topic-list.component.html",
  styleUrls: ["./topic-list.component.scss"]
})
export class TopicListComponent implements OnInit {

  topics = [
    {
      id : 1,
      topic : "Topic 1"
    },
    {
      id : 2,
      topic : "Topic 2"
    },
    {
      id : 3,
      topic : "Topic 3"
    },
    {
      id : 4,
      topic : "Topic 4"
    },
    {
      id : 5,
      topic : "Topic 5"
    },
    {
      id : 6,
      topic : "Topic 6"
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTopicDialogModal, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

}

@Component({
  selector: "app-add-topic-modal",
  templateUrl: "./add-topic-modal.html",
})
// tslint:disable-next-line: component-class-suffix
export class AddTopicDialogModal {

  constructor(
    public dialogRef: MatDialogRef<AddTopicDialogModal>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
