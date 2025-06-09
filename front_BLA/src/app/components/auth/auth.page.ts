import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss'],
  standalone: false,
})
export class AuthPage {
  registro = {
    username: '',
    email: '',
    password: ''
  };

  // Login
  login = {
    email: '',
    password: ''
  };

  registroResultado: string = '';
  loginResultado: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
  this.authService.registrar(this.registro).subscribe({
    next: (res: any) => {
      if (res && res.token) {
        localStorage.setItem('jwtToken', res.token);  // Guardar token tras registro
        this.router.navigate(['../../tabs/usuario']);               
      } else {
        this.registroResultado = 'Registro exitoso, pero no se recibió token.';
      }
    },
    error: (err) => {
      this.registroResultado = 'Error en el registro.';
      console.error(err);
    }
  });
}


 onLogin() {
    this.authService.autentificar(this.login).subscribe({
        next: (res) => {
            console.log('Respuesta del servidor:', res); 
            this.loginResultado = 'Autenticación exitosa.';

            if (res && res.token) {
                localStorage.setItem('jwtToken', res.token);        
                
                this.router.navigate(['../../tabs/usuario']); 
                
            } else {
                console.error('No se encontró el token en la respuesta del servidor.');
            }
        },
        error: (err) => {
            this.loginResultado = 'Error al iniciar sesión.';
            console.error(err);
        }
    });
}

}
  
