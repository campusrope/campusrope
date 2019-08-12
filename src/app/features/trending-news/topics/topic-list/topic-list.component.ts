import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Topic, TopicService } from "../topic.service";

@Component({
  selector: "app-topic-list",
  templateUrl: "./topic-list.component.html",
  styleUrls: ["./topic-list.component.scss"]
})
export class TopicListComponent implements OnInit {

  topics: Topic[];

  constructor(private dialog: MatDialog, private topicService: TopicService) { }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
  }

  openDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
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
