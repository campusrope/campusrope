import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
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
      width: "250px",
      hasBackdrop: false
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
export class AddTopicDialogModal implements OnInit {
  formGroup: FormGroup;
  titleAlert = "This field is required";
  constructor(
    private dialogRef: MatDialogRef<AddTopicDialogModal>,
    private formBuilder: FormBuilder,
    private topicService: TopicService
    ) {}

    ngOnInit() {
      this.createForm();
    }

    onCancelClick(): void {
      this.dialogRef.close();
    }

    createForm() {
      this.formGroup = this.formBuilder.group({
        topicName: [null, Validators.required]
      });
    }

    onSaveTopic() {
      if (!this.formGroup.valid) { return; }
      const data: Topic = {
        id : this.topicService.getTopics().length + 1,
        topic : this.formGroup.value.topicName
      };
      this.topicService.addTopic(data);
      this.onCancelClick();
    }

}
