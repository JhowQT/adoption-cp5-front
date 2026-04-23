import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email = '';
  senha = '';

  private API = 'http://localhost:8081/users/login';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post(`${this.API}?email=${this.email}&senha=${this.senha}`, {})
      .subscribe({
        next: () => {
          alert('Login realizado!');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          alert(err.error?.error || 'Erro no login');
        }
      });
  }
}
