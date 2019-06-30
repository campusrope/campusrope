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
  selector: 'campusrope-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayedColumns: string[] = [ 'Admins', 'Control System','Actions'];
  dataSource = ELEMENT_DATA;

}
