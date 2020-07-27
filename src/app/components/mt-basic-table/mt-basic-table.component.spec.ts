import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MtBasicTableComponent } from './mt-basic-table.component';
import { MatTableModule } from '@angular/material/table';

describe('MtBasicTableComponent', () => {
  let component: MtBasicTableComponent;
  let fixture: ComponentFixture<MtBasicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
      ],
      declarations: [
        MtBasicTableComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtBasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
