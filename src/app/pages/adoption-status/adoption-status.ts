import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adoption-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adoption-status.html',
  styleUrls: ['./adoption-status.css']
})
export class AdoptionStatus {

  success = false;
  error = false;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();

    if (navigation?.extras?.state) {
      this.success = navigation.extras.state['success'];
      this.error = navigation.extras.state['error'];
    }
  }

  voltar() {
    window.history.back(); // 🔥 volta para tela anterior
  }

  irParaHome() {
    this.router.navigate(['/home']);
  }
}
