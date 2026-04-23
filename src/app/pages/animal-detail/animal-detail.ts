import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { AdoptionService } from '../../services/adoption.service';
import { Animal } from '../../models/animal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-detail.html',
  styleUrls: ['./animal-detail.css']
})
export class AnimalDetail implements OnInit {

  animal?: Animal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService,
    private adoptionService: AdoptionService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      console.log('ID RECEBIDO:', id);

      if (!id) {
        console.error('ID inválido');
        return;
      }

      this.animalService.getById(id).subscribe({
        next: (data) => {
          console.log('ANIMAL RECEBIDO:', data);
          this.animal = data;

          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro ao buscar animal:', err);
        }
      });

    });
  }

  adopt() {
    if (!this.animal) return;

    const userId = 1;

    this.adoptionService.create(userId, this.animal.id).subscribe({

      // ✅ SUCESSO
      next: () => {
        this.router.navigate(['/adoption-status'], {
          state: { success: true }
        });
      },

      // ❌ ERRO (AGORA TRATADO)
      error: (err) => {
        console.error('Erro ao solicitar adoção:', err);

        this.router.navigate(['/adoption-status'], {
          state: { error: true }
        });
      }
    });
  }
}
