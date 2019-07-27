import { Component, OnInit } from "@angular/core";

const ELEMENT_DATA = [
  { name: "Santhosh Kumar", controlSystems: "Helpline, Trending News" },
  { name: "Shantanu", controlSystems: "Add Commercials, Add Contents" },
  { name: "Ravi", controlSystems: "Helpline, Trending News" },
  { name: "Santhosh Kumar", controlSystems: "Helpline, Trending News" },
  { name: "Shantanu", controlSystems: "Add Commercials, Add Contents" },
  { name: "Ravi", controlSystems: "Helpline, Trending News" }
];

@Component({
  selector: "app-admin-task-list",
  templateUrl: "./admin-task-list.component.html",
  styleUrls: ["./admin-task-list.component.scss"]
})
export class AdminTaskListComponent implements OnInit {
  displayedColumns: string[] = ["Admins", "Control System", "Actions"];
  adminList = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}
}
