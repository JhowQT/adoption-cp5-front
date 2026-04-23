import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../../services/adoption.service';
import { Adoption } from '../../models/adoption.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adoptions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adoptions.html',
  styleUrls: ['./adoptions.css']
})
export class Adoptions implements OnInit {

  adoptions: Adoption[] = [];

  constructor(private service: AdoptionService) {}

  ngOnInit() {
    const userId = 1;
    this.service.getByUser(userId).subscribe(data => {
      this.adoptions = data;
    });
  }
}