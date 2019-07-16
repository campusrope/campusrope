import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA  = [
  {name: 'Hydrogen', symbol: 'H'},
  { name: 'Helium',  symbol: 'He'},
  {name: 'Lithium',  symbol: 'Li'},
  { name: 'Beryllium', symbol: 'Be'},
  { name: 'Boron', symbol: 'B'},
  { name: 'Carbon',  symbol: 'C'},
  { name: 'Nitrogen',  symbol: 'N'},
  { name: 'Oxygen',  symbol: 'O'},
  { name: 'Fluorine', symbol: 'F'},
  { name: 'Neon', symbol: 'Ne'},

];

@Component({
  selector: 'app-admin-task-list',
  templateUrl: './admin-task-list.component.html',
  styleUrls: ['./admin-task-list.component.scss']
})
export class AdminTaskListComponent implements OnInit {

  displayedColumns: string[] = [ 'Admins', 'Control System', 'Actions'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}
}
