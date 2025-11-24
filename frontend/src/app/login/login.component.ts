import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    console.log("Login button clicked!");

    if (this.loginForm.invalid) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    this.http.post('http://localhost:3000/api/formations/login', this.loginForm.value)
      .subscribe({
        next: (res: any) => {
          console.log("Login successful :", res);
          alert("Connexion réussie !");
          this.router.navigate(['/dashboard']); // 🎯 فتح الداشبورد
        },
        error: (err) => {
          console.error("Erreur login :", err);
          alert("Nom d'utilisateur ou mot de passe incorrect !");
        }
      });
  }
}
