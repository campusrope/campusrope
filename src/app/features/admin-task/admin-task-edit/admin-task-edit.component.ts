import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../core/location/location.service';

@Component({
  selector: 'app-admin-task-edit',
  templateUrl: './admin-task-edit.component.html',
  styleUrls: ['../admin-task-add/admin-task-add.component.scss']
})
export class AdminTaskEditComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  }

  goBack(): any {
    this.locationService.goBack();
  }

}
