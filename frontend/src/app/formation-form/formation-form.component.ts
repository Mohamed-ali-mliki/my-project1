
// formation-form.component.ts
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formation-form',
  standalone: true,
  imports: [ReactiveFormsModule], // ✅ إضافة ReactiveFormsModule هنا
  templateUrl: './formation-form.component.html',
})
export class FormationFormComponent {
  formationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formationForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      duree: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.formationForm.value);
    // هنا يمكنك استدعاء الخدمة لإرسال البيانات إلى الـ backend
  }
}
