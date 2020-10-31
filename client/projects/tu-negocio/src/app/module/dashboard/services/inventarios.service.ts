import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Inventario } from '../../../models/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventariosService {
  private inventariosUrl = 'api/inventarios';
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
