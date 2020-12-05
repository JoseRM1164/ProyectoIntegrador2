import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {map, retry, catchError, tap} from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Currency } from '../../../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private endpoint = 'https://api.exchangeratesapi.io/latest?base=MXN&symbols=USD,CAD,EUR';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unkown error!';
    if (error.error instanceof ErrorEvent) {
      // Client side errors
    } else {
      // Server side errors
      errorMessage = `Error Code: ${error.status}/nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getCurrency(): Observable<Currency> {
    return this.http.get<Currency>(this.endpoint).pipe(retry(3), catchError(this.handleError));
  }
}
