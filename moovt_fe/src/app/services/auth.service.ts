import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private users: { username: string, password: string }[] = [
    { username: 'admin', password: 'password' } // Utente di esempio
  ];

  constructor(private router: Router) { }

  // Login esistente
  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.isAuthenticated = true;
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  // Funzione di registrazione
  register(username: string, password: string): boolean {
    const userExists = this.users.some(u => u.username === username);
    if (!userExists) {
      this.users.push({ username, password });
      this.isAuthenticated = true;
      this.router.navigate(['/home']); // Redirige dopo la registrazione
      return true;
    }
    return false; // Restituisce false se l'utente esiste già
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
