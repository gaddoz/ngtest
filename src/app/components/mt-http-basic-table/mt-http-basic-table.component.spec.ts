import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestHttpService, GithubIssue } from '../../data/test.http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MtHttpBasicTableComponent } from './mt-http-basic-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';


const mockUsers = [
  { name: 'Bob', website: 'www.yessss.com' },
  { name: 'Juliette', website: 'nope.com' }
];


describe('MtHttpBasicTableComponent', () => {
  let component: MtHttpBasicTableComponent;
  let fixture: ComponentFixture<MtHttpBasicTableComponent>;
  let service: TestHttpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MtHttpBasicTableComponent
      ],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
      ],
      providers: [
        TestHttpService,
      ]
    });

    service = TestBed.get(TestHttpService);

    // .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtHttpBasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const mockResponse = {
    data: [
      { id: 0, name: 'Video 0' },
      { id: 1, name: 'Video 1' },
      { id: 2, name: 'Video 2' },
      { id: 3, name: 'Video 3' },
    ]
  };

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
  });


});
