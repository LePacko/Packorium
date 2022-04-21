import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Feedback } from '../feedback';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetlifyFormsService {

  constructor(private http: HttpClient) { }

  submitFeedback(fbEntry: Feedback): Observable<string> {
    const entry = new HttpParams({ fromObject: {
      'form-name': 'feedbackForm',
      ...fbEntry,
      'rating': fbEntry.rating.toString(),
    }});

    return this.submitEntry(entry);
  }

  private submitEntry(entry: HttpParams): Observable<string> {
    return this.http.post(
      '/',
      entry.toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded',
        'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload'

 },
        responseType: 'text'
      }
    ).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = '';

    if (err.error instanceof ErrorEvent) {
      errMsg = `A client-side error occurred: ${err.error.message}`;
    } else {
      errMsg = `A server-side error occurred. Code: ${err.status}. Message: ${err.message}`;
    }

    return throwError(errMsg);
  }
}