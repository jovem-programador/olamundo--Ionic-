import { Injectable } from '@angular/core';

// Requisição assíncronas
import { Observable } from 'rxjs';

// Cliente HTTP do Angular
import { HttpClient } from '@angular/common/http';

import { ResponseUsers } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Url da api
private apiUrl = 'http://localhost:8888/api';

// Inicializa o cliente HTTP
  constructor(private http: HttpClient) { }

  // Metodo para obter todos os usuarios
  getUsers(): Observable<ResponseUsers> {

    return this.http.get<ResponseUsers>(this.apiUrl);
  }

    // Metodo para obter usuarios único
    getUser(id: string): Observable<ResponseUsers> {

      const url = `${this.apiUrl}?id=${id}`;

      return this.http.get<ResponseUsers>(url);
    }
}
