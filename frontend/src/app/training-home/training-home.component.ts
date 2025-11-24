import { Component } from '@angular/core';

@Component({
  selector: 'app-training-home',
  standalone: true,
  template: `
    <div class="page-container">
      <header>
        <span class="app-title">formation</span>
      </header>
      <main class="content-area">
        <h1>formation en ligne</h1>
        <p>
          This online training program offers a flexible and interactive learning experience
          designed to empower you to acquire new skills at your own pace.
        </p>
      </main>
    </div>
  `,
  styles: [`
    .app-title {
      display: block;
      text-align: center;
      color: red;
      font-style: italic;
      font-size: 2em;
      font-weight: bold;
      margin-top: 20px;
    }
    .page-container {
      background-image: url('https://knowledgeone.ca/wp-content/uploads/2022/05/learner-online.jpg');
      background-size: cover;
      height: 100vh;
      color: white;
      padding: 20px;
      box-sizing: border-box;
    }
    .content-area {
      text-align: center;
      margin-top: 50px;
      background-color: rgba(0,0,0,0.5);
      padding: 20px;
      border-radius: 10px;
    }
  `]
})
export class TrainingHomeComponent {}
