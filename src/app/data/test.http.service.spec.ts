import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TestHttpService } from './test.http.service';

describe('TestHttpDatabase', () => {
  let service: TestHttpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [ TestHttpService ]
    });
    service = TestBed.get(TestHttpService);
  }));

  beforeEach(() => {

  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

});
