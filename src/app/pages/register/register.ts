import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  constructor(private http: HttpClient) {}

  register() {
    this.http.post(this.API, this.form).subscribe({
      next: () => {
        alert('Usuário cadastrado com sucesso!');
        this.resetForm();
      },
      error: (err) => {
        alert(err.error?.error || 'Erro ao cadastrar');
      }
    });
  }

  resetForm() {
    this.form = {
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
  }
}
