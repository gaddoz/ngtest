import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SampleComponent } from './sample.component';
import { SampleService } from '../../data/sample.service';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;
  let service: SampleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleComponent ],
      imports: [ HttpClientModule ],
      providers: [ SampleService ],
    });
    service = TestBed.get(SampleService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
