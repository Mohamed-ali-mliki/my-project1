import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationService, Formation } from '../services/formation.service';

@Component({
  selector: 'app-formation-online',
  standalone: true,
  imports: [CommonModule],  // <-- مهم لتعمل *ngFor
  templateUrl: './formation-online.component.html',
  styleUrls: ['./formation-online.component.css']
})
export class FormationOnlineComponent implements OnInit {
  formations: Formation[] = [];

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.formationService.getFormations().subscribe({
      next: (data: Formation[]) => {
        this.formations = data;
      },
      error: (err: any) => {
        console.error('حدث خطأ:', err);
      }
    });
  }
}
