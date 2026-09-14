import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  modo: AuthMode = 'login';
  mostrarPassword = false;

  camposDemo = ['NIF del emisor', 'Base imponible', 'Tipo de IVA'];

  loginForm = {
    email: '',
    password: '',
    recordarme: false
  };

  registerForm = {
    nombre: '',
    email: '',
    password: '',
    aceptaTerminos: false
  };

  onLogin(): void {
    // Conectar con el endpoint real de autenticación
  }

  onRegister(): void {
    // Conectar con el endpoint real de registro
  }
}