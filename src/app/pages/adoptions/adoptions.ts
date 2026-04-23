import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../../services/adoption.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adoptions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adoptions.html',
  styleUrls: ['./adoptions.css']
})
export class Adoptions implements OnInit {

  adoptions: any[] = [];

  constructor(private adoptionService: AdoptionService) {}

  ngOnInit() {
    const userId = 1;

    this.adoptionService.getByUser(userId).subscribe({
      next: (data) => {
        this.adoptions = data;
      },
      error: (err) => console.error(err)
    });
  }
}
