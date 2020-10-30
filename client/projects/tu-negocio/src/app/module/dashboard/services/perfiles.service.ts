import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Perfil } from '../../../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {
  private perfilesUrl = 'api/perfiles';

  constructor(private http: HttpClient) {}

  getPerfiles(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.perfilesUrl);
  }
}
