import { Component, OnInit } from '@angular/core';
import { ServerDataSource, LocalDataSource } from 'ng2-smart-table';
import { COLS, ELEMENT_DATA } from '../../data/basic';

@Component({
  selector: 'app-ng-basic-table',
  templateUrl: './ng-basic-table.component.html',
  styleUrls: ['./ng-basic-table.component.css']
})
export class NgBasicTableComponent implements OnInit {

  settings = {
    columns: COLS,
  };
  source = new LocalDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
