import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  animals: Animal[] = [];

  constructor(
    private animalService: AnimalService,
    private cdr: ChangeDetectorRef // 👈 IMPORTANTE
  ) {}

  ngOnInit() {
    console.log('HOME INICIOU');
    this.loadAnimals();
  }

  loadAnimals() {
    this.animalService.getAvailable().subscribe({
      next: (data) => {
        console.log('ANIMAIS CARREGADOS:', data);

        this.animals = data;

        // 🔥 FORÇA ATUALIZAÇÃO DA VIEW
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
