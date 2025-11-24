import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styles: [`
.signup-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px 25px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.signup-container h2 {
  text-align: center;
  color: #1a73e8;
  margin-bottom: 25px;
  font-size: 24px;
}
form label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}
form input,
form textarea {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
}
form input:focus,
form textarea:focus {
  border-color: #1a73e8;
  box-shadow: 0 0 5px rgba(26, 115, 232, 0.3);
  outline: none;
}
form button {
  width: 100%;
  padding: 12px;
  background-color: #1a73e8;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
form button:hover {
  background-color: #155ab6;
}
@media (max-width: 550px) {
  .signup-container {
    margin: 20px;
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
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      titreFormation: ['', Validators.required],
      contenuFormation: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      alert('الرجاء ملء جميع الحقول قبل الإرسال.');
      return;
    }

    const userData = this.signupForm.value;

    // إرسال البيانات إلى backend
    this.http.post('http://localhost:3000/api/formations/signup', userData)
      .subscribe({
        next: (res) => {
          console.log('تم التسجيل في MongoDB:', res);
          alert('تم التسجيل بنجاح!');
          this.signupForm.reset();
        },
        error: (err) => {
          console.error('حدث خطأ:', err);
          // عرض رسالة الخطأ الفعلية من backend إن وجدت
          if (err.error && err.error.message) {
            alert('خطأ: ' + err.error.message);
          } else {
            alert('حدث خطأ أثناء التسجيل. تحقق من الخادم.');
          }
        }
      });
  }
}
