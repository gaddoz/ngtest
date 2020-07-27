import { HttpClient} from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { merge, Observable, of as observableOf} from 'rxjs';
import { catchError, map, startWith, switchMap} from 'rxjs/operators';

export interface GithubApi {
    items: GithubIssue[];
    total_count: number;
  }

export interface GithubIssue {
    created_at: string;
    number: string;
    state: string;
    title: string;
}

@Injectable()
export class TestHttpService {
    constructor(private _httpClient: HttpClient) {}

    getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {

      // const sort: string = 'created';
      // const order: string = 'asc';
      // const page: number = 1;

      const href = 'https://api.github.com/search/issues';
      const requestUrl =
          `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

      return this._httpClient.get<GithubApi>(requestUrl);
    }
}