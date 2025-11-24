import { Component, OnInit } from '@angular/core';
import { FormationService, Formation } from '../services/formation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styles: [
    `
      h1 {
        color: darkblue;
      }
      p {
        font-size: 1.2em;
      }
      h2 {
        color: darkgreen;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  formations: Formation[] = [];

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.formationService.getFormations().subscribe((data) => {
      this.formations = data;
    });
  }

  delete(id: string | undefined): void {
    if (!id) {
      console.error('Cannot delete: formation ID is undefined.');
      return;
    }
    this.formationService.deleteFormation(id).subscribe(() => {
      this.loadFormations();
    });
  }

  edit(f: Formation): void {
    alert(`Modifier formation: ${f.nom}`);
  }
}
