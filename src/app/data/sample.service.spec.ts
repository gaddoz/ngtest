import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SampleService } from './sample.service';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [ SampleService ]
    });
    service = TestBed.get(SampleService);
  }));

  beforeEach(() => {

  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

});
