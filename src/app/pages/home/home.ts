import { Component, OnInit } from '@angular/core';
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

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.loadAnimals();
  }

  loadAnimals() {
    this.animalService.getAvailable().subscribe(data => {
      this.animals = data;
    });
  }
}