import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  private API = 'http://localhost:8081/users';

  form = {
    name: '',
    email: '',
    age: 18,
    password: '',
    city: '',
    hasYard: false,
    homeType: '',
    experienceLevel: '',
    preferredAnimalSize: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post(this.API, this.form).subscribe({
      next: () => {
        alert('Usuário cadastrado com sucesso!');

        // 🔥 REDIRECIONA PARA LOGIN
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert(err.error?.error || 'Erro ao cadastrar');
      }
    });
  }
}
