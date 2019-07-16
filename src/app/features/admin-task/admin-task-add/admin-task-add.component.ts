import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { LocationService } from '../../../core/location/location.service';

@Component({
  selector: 'app-admin-task-add',
  templateUrl: './admin-task-add.component.html',
  styleUrls: ['./admin-task-add.component.scss']
})
export class AdminTaskAddComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  goBack(): any {
    this.locationService.goBack();
  }

}
