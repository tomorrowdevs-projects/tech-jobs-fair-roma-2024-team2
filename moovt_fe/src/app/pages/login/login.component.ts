import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('0.5s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  isRegisterMode: boolean = false;

  constructor(private authService: AuthService) {}

  onLogin() {
    if (!this.isRegisterMode) {
      this.authService.login(this.username, this.password).subscribe({
        next: (isSuccess) => {
          if (!isSuccess) {
            this.errorMessage = 'Credenziali non valide. Riprova.';
          }
        },
        error: () => {
          this.errorMessage = 'Errore durante il login. Riprova più tardi.';
        }
      });
    } else {
      this.onRegister();
    }
  }

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Le password non coincidono. Riprova.';
      return;
    }

    this.authService.register(this.username, this.password).subscribe({
      next: (isSuccess) => {
        if (!isSuccess) {
          this.errorMessage = 'Username già esistente. Scegline un altro.';
        }
      },
      error: () => {
        this.errorMessage = 'Errore durante la registrazione. Riprova più tardi.';
      }
    });
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.errorMessage = ''; // Resetta eventuali messaggi di errore
  }
}
