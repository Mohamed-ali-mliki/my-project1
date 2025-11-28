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

  // API principale للـ formations
  private apiUrl = 'http://localhost:3000/api/formations';

  // API خاصة بـ signup/login (اختياري)
  private authUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  // --- Get all formations ---
  getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.apiUrl);
  }

  // --- Get one formation by id ---
  getFormation(id: string): Observable<Formation> {
    return this.http.get<Formation>(`${this.apiUrl}/${id}`);
  }

  // --- Create new formation (حل رقم 1 المطبق هنا) ---
  createFormation(data: Formation): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  // --- Signup user (اختياري حسب مشروعك) ---
  signup(data: Formation): Observable<any> {
    return this.http.post(`${this.authUrl}/signup`, data);
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
    return this.http.post(`${this.authUrl}/login`, credentials);
  }
}
