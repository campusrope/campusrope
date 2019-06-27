import { Component, OnInit } from '@angular/core';
import { LocationService} from '../../../../../shared/src/'

@Component({
  selector: 'campusrope-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['../admin-add/admin-add.component.css']
})
export class AdminEditComponent implements OnInit {

  constructor(private locationService : LocationService) { }

  ngOnInit() {
  }

  goBack(): any {
    this.locationService.goBack();
  }

}
