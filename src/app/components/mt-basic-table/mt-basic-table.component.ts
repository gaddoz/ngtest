import { Component, OnInit } from '@angular/core';
import { COLS_TITLES, ELEMENT_DATA } from '../../data/basic';

@Component({
  selector: 'app-mt-basic-table',
  templateUrl: './mt-basic-table.component.html',
  styleUrls: ['./mt-basic-table.component.css']
})
export class MtBasicTableComponent implements OnInit {

  displayedColumns = COLS_TITLES;
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
