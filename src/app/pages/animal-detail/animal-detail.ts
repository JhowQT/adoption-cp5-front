import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private animalService: AnimalService,
    private adoptionService: AdoptionService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.animalService.getById(id).subscribe(data => {
      this.animal = data;
    });
  }

  adopt() {
    const userId = 1; // depois vamos pegar do login
    this.adoptionService.create(userId, this.animal!.id).subscribe(() => {
      alert('Adoção solicitada!');
    });
  }
}