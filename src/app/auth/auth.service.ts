import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// Set up the HTTP client and the base URL for the server
constructor(private http: HttpClient) {}

// Sign up a new user
signup(email: string, password: string) {
  return this.http.post(`${environment.apiUrl}/api/users/signup`, { email, password });
}

// Log in an existing user
login(email: string, password: string) {
  return this.http.post(`${environment.apiUrl}/api/users/login`, { email, password });
}
}
