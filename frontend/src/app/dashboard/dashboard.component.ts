import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormationService, Formation } from '../services/formation.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formations: Formation[] = [];
  form!: FormGroup;
  isEditing = false;
  selectedId: string | null = null;

  constructor(private fb: FormBuilder, private formationService: FormationService) {}

  ngOnInit(): void {
    this.loadFormations();

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: [''], // ممكن نخليها اختيارية عند التعديل
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      titreFormation: ['', Validators.required],
      contenuFormation: ['', Validators.required]
    });
  }

  // ---- Load All Users ----
  loadFormations(): void {
    this.formationService.getFormations().subscribe(data => {
      this.formations = data;
    });
  }

  // ---- Create ----
  onSubmit(): void {
    if (this.form.invalid) return;

    if (this.isEditing && this.selectedId) {
      // Update existing record
      this.formationService.updateFormation(this.selectedId, this.form.value).subscribe(() => {
        alert("Mise à jour réussie !");
        this.cancelEdit();
        this.loadFormations();
      });

    } else {
      // Create new record
      this.formationService.createFormation(this.form.value).subscribe(() => {
        alert("Formation ajoutée avec succès !");
        this.form.reset();
        this.loadFormations();
      });
    }
  }

  // ---- Edit Mode ----
  editFormation(f: Formation): void {
    this.isEditing = true;
    this.selectedId = f._id ?? null;

    this.form.patchValue({
      username: f.username,
      password: '',
      nom: f.nom,
      prenom: f.prenom,
      titreFormation: f.titreFormation,
      contenuFormation: f.contenuFormation
    });
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.selectedId = null;
    this.form.reset();
  }

  // ---- Delete ----
  deleteFormation(id: string | undefined): void {
    if (!id) return;

    if (confirm("Êtes-vous sûr de vouloir supprimer ?")) {
      this.formationService.deleteFormation(id).subscribe(() => {
        alert("Supprimé !");
        this.loadFormations();
      });
    }
  }
}


