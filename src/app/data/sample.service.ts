import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SampleService {

  constructor(private http: HttpClient) {}

  getVideos(): Promise<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos/').toPromise();
  }
}
