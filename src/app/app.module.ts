import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgBasicTableComponent } from './components/ng-basic-table/ng-basic-table.component';
import { MtBasicTableComponent } from './components/mt-basic-table/mt-basic-table.component';
import { MtHttpBasicTableComponent } from './components/mt-http-basic-table/mt-http-basic-table.component';
import { TestHttpService, GithubIssue } from './data/test.http.service';
import { SampleService } from './data/sample.service';
import { SampleComponent } from './components/sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    NgBasicTableComponent,
    MtBasicTableComponent,
    MtHttpBasicTableComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    Ng2SmartTableModule
  ],
  providers: [
    // TestHttpService,
    SampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
