import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: 'usuario.page.html',
  styleUrls: ['usuario.page.scss'],
  standalone: false,
})
export class UsuarioPage implements OnInit {

  public usuarioLogeado: Usuario | null = null;

  public id : number | null = null; 

  public userName : string | null = null; 

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
     this.obtenerIdToken();
     this.obtenerUserNameToken();
     this.usuarioId(this.id as number);
  }

  private usuarioId(id: number): void {
    this.usuarioService.usuarioPorId(id).subscribe((data) => {
      this.usuarioLogeado = data;
    });
  }

  obtenerIdToken() {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
      console.error("Token no encontrado");
      return;
    }

    try {
      const tokenData: any = jwtDecode(token);
      this.id = tokenData.id ;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
    }
  }

 obtenerUserNameToken() {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
      console.error("Token no encontrado");
      return;
    }

    try {
      const tokenData: any = jwtDecode(token);
      this.userName = tokenData.username; ;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
    }
  }

logout(): void {
    localStorage.removeItem('jwtToken');
    window.location.reload();
    this.router.navigate(['../../tabs/auth']);  // Redirige a login o página de autenticación
  }
}
