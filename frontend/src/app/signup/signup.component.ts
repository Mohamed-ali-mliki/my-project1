import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styles: [`

/* Fond bleu clair */
.signup-background {
  height: 100vh;
  background: #e3f2fd;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Carte du formulaire */
.signup-container {
  background: white;
  padding: 30px;
  width: 420px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.7s ease;
}

/* Titre */
.signup-container h2 {
  text-align: center;
  color: #12ec2fff;
  margin-bottom: 20px;
  font-size: 24px;
}

/* Labels */
form label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}

/* Inputs + Textarea */
form input,
form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #90caf9;
  font-size: 14px;
  transition: 0.3s;
}

/* Focus */
form input:focus,
form textarea:focus {
  border-color: #1976d2;
  box-shadow: 0 0 5px rgba(25,118,210,0.4);
  outline: none;
}

/* Bouton */
form button {
  width: 100%;
  padding: 12px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

form button:hover {
  background-color: #1976d2;
}

/* Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 550px) {
  .signup-container {
    width: 90%;
    padding: 20px;
  }
  form button {
    font-size: 14px;
    padding: 10px;
  }
}

  `],
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {

    // Formulaire
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      titreFormation: ['', Validators.required],
      contenuFormation: ['', Validators.required]
    });
  }

  // Soumission du formulaire
  onSubmit() {
    if (!this.signupForm.valid) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const userData = this.signupForm.value;

    this.http.post('http://localhost:3000/api/formations/signup', userData)
      .subscribe({
        next: (res) => {
          console.log('Enregistrement réussi:', res);
          alert('Inscription réussie !');
          this.signupForm.reset();
        },
        error: (err) => {
          console.error('Erreur:', err);

          if (err.error && err.error.message) {
            alert('Erreur: ' + err.error.message);
          } else {
            alert('Une erreur est survenue.');
          }
        }
      });
  }
}
