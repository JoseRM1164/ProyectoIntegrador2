import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {map, retry, catchError, tap} from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import {Inventario} from '../../../models/inventario';
import {Producto} from '../../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class InventariosService {
  private endpoint = 'http://localhost:4000/api';

  currentInventario: Inventario = {
    _id: 'none',
    name: 'none',
    descripcion: 'none',
    creationDate: new Date(),
    uID: 'none'
  };

  constructor(private http: HttpClient) {}

  accederInventario(inventario: Inventario) {
    this.currentInventario = inventario;
  }

  private extraData(res: Response) {
    let body = res;
    return body || {};
  }

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

  getInventarios(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.endpoint + '/rInven').pipe(retry(3), catchError(this.handleError));
  }

  getProductos(id: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.endpoint + '/rProd?invenID=' + id).pipe(retry(3), catchError(this.handleError));
  }

  addInventario(inventario: Inventario): Observable<Inventario> {
    return this.http.post<Inventario>(this.endpoint + '/cInven', inventario).pipe(retry(3), catchError(this.handleError));
  }

  updateInventario(inventario: Inventario, id: string) {
    this.http.put<Inventario>(this.endpoint + '/' + id, inventario).subscribe({
      next: data => {
        console.log('datos', data)
      },
      error: error => {
        this.handleError(error);
      }
    });
  }
  
  deleteAlumno(id: string) {
    this.http.delete<Inventario>(this.endpoint + '/' + id).subscribe({
      next: data => {
        console.log('datos', data)
      },
      error: error => {
        this.handleError(error);
      }
    });
  }
}

/*
  currentInventario: Inventario = {
    id: 0,
    productos: []
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  modificarInventario(inventario: Inventario) {
    this.currentInventario = inventario;
  }

  getInventarios(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.inventariosUrl)
      .pipe(
        catchError(this.handleError<Inventario[]>('getInventarios', []))
      );
  }

  getInventario(id: number): Observable<Inventario> {
    const url = `${this.inventariosUrl}/${id}`;
    return this.http.get<Inventario>(url).pipe(
      catchError(this.handleError<Inventario>(`getInventario id${id}`))
    );
  }

  updateInventario(inventario: Inventario): Observable<any> {
    return this.http.put(this.inventariosUrl, inventario, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateInventario'))
    );
  }

  addInventario(inventario: Inventario): Observable<Inventario> {
    console.log("added");
    return this.http.post<Inventario>(this.inventariosUrl, inventario, this.httpOptions)
      .pipe(
        tap((newInventario: Inventario) => console.log(`nuevo inventario w/ id=${newInventario.id}`)),
        catchError(this.handleError<Inventario>('addInventario'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log("Error");
      console.error(error);
      return of(result as T);
    };
  }
  
}
*/
