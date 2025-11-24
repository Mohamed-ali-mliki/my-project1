import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Formation {
  _id?: string;
  username: string;
  password?: string;
  nom: string;
  prenom: string;
  titreFormation: string;
  contenuFormation: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiUrl = 'http://localhost:3000/api/formations';

  constructor(private http: HttpClient) {}

  // --- Get All formations (users) ---
  getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.apiUrl);
  }

  // --- Get one formation ---
  getFormation(id: string): Observable<Formation> {
    return this.http.get<Formation>(`${this.apiUrl}/${id}`);
  }

  // --- Create formation (signup) ---
  createFormation(data: Formation): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  // --- Update formation ---
  updateFormation(id: string, data: Formation): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // --- Delete formation ---
  deleteFormation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // --- Login ---
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
