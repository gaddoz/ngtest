import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBasicTableComponent } from './ng-basic-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

describe('NgBasicTableComponent', () => {
  let component: NgBasicTableComponent;
  let fixture: ComponentFixture<NgBasicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Ng2SmartTableModule,
      ],
      declarations: [
        NgBasicTableComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
