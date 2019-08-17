import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { LocationService } from "../../../core/location/location.service";
import { AdminTask } from "../../../core/models/admin-task";
import { AdminTaskService } from "../admin-task.service";
@Component({
  selector: "app-admin-task-add",
  templateUrl: "./admin-task-add.component.html",
  styleUrls: ["./admin-task-add.component.scss"]
})
export class AdminTaskAddComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [
    "santhosh123@gmail.com",
    "ravi67@gmail.com",
    "sundar@gmail.com"
  ];
  tasks: AdminTask[] = [
    {
      id: 1,
      taskName: "Add Commercials",
      assigned: false
    },
    {
      id: 2,
      taskName: "Add Feed Contents",
      assigned: false
    },
    {
      id: 3,
      taskName: "Helpline Directory",
      assigned: false
    },
    {
      id: 4,
      taskName: "Trending News",
      assigned: false
    }
  ];
  filteredOptions: Observable<string[]>;

  constructor(
    private locationService: LocationService,
    private adminTaskService: AdminTaskService
  ) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  goBack(): any {
    this.locationService.goBack();
  }

  saveAdminTask(): any {
    const assignedTasks = this.tasks.filter(task => task.assigned);
    const data = {
      userId: "1",
      tasks: assignedTasks
    };
    // this.adminTaskService.createAdminTask(data).subscribe(console.log);
  }
}
