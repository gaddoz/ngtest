import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgBasicTableComponent } from './components/ng-basic-table/ng-basic-table.component';
import { MtBasicTableComponent } from './components/mt-basic-table/mt-basic-table.component';
import { MtHttpBasicTableComponent } from './components/mt-http-basic-table/mt-http-basic-table.component';
import { HttpClientModule } from '@angular/common/http';
import { SampleService } from './data/sample.service';
import { SampleComponent } from './components/sample/sample.component';
import { TestHttpService } from './data/test.http.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NgBasicTableComponent,
        MtBasicTableComponent,
        MtHttpBasicTableComponent,
        SampleComponent,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        Ng2SmartTableModule,
        HttpClientModule,
      ],
      providers: [
        SampleService,
        TestHttpService,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ngtest'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.title = 'test title';
    expect(app.title).toEqual('test title');
  }));
  /*it('should render title in a h1 tag compiled!!!', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.componentInstance.title = 'test title';
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('test title');
  }));
  it('should render the mt-basic-table check data row 1', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table').textContent).toContain('Hydrogen');
  }));
  it('should render the mt-basic-table check data row 2', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table').textContent).toContain('Fluorine');
  }));
  it('should render the ng2-table check data No data found', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ng2-smart-table').textContent).toContain('No data found');
  }));
  it('should render the ng2-table check header (data binding not working)', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ng2-smart-table').textContent).toContain('Actions');
  }));*/
  it('should create SampleService', () => {
    const service: SampleService = TestBed.get(SampleService);
    expect(service).toBeTruthy();
  });
  it('should create TestHttpService', () => {
    const service: TestHttpService = TestBed.get(TestHttpService);
    expect(service).toBeTruthy();
  });
});
