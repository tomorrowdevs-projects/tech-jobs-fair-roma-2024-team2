import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router, private http: HttpClient) { }

  // Funzione di login
  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ success: boolean }>('//localhost:8080/auth/login', { username, password }).pipe(
      tap(response => {
        if (response.success) {
          this.isAuthenticated = true;
          this.router.navigate(['/home']);
        }
      }),
      map(response => response.success) // Trasforma { success: boolean } in boolean
    );
  }

  // Funzione di registrazione
  register(username: string, password: string): Observable<boolean> {
    return this.http.post<{ success: boolean }>('//localhost:8080/auth/signup', { username, password }).pipe(
      tap(response => {
        if (response.success) {
          this.isAuthenticated = true;
          this.router.navigate(['/dashboard']); // Redirige dopo la registrazione
        }
      }),
      map(response => response.success) // Trasforma { success: boolean } in boolean
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
