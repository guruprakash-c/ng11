import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppSvcHandler {
  errMsg: string;
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/usssers').pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  getUser(userId) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.errMsg = `Error: ${error.error.message}`;
    } else {
      this.errMsg = this.GetHTTPCode(error);
    }
    return throwError(this.errMsg);
  }
  private GetHTTPCode(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }
    }
  }
}
