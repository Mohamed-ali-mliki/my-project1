📘 Projet : Plateforme de Formations en Ligne

Ce projet est une application web complète permettant aux utilisateurs de s’inscrire, se connecter, consulter des formations et gérer les données via un tableau de bord administrateur.

🚀 Fonctionnalités principales
🔹 1. Page d’accueil – Home

Présentation du concept de “formation en ligne”.

Texte descriptif et interface moderne.

Accès rapide aux sections principales (Login, Sign Up, Formations Online).

🔹 2. Inscription – Sign Up

Formulaire d’inscription contenant :

Username

Password

Nom

Prénom

Titre de la formation

Contenu de la formation

Lors de la validation :
✔ Les données sont enregistrées dans MongoDB
✔ La formation est automatiquement ajoutée à la section Formations Online

🔹 3. Connexion – Login

Authentification via username + password

Vérification dans la base de données

Si les informations sont correctes → redirection vers Dashboard

🔹 4. Dashboard (CRUD complet)

Pour l’administrateur :

➕ Ajouter

🔍 Lire

✏️ Modifier

❌ Supprimer

Les données gérées concernent les utilisateurs et les formations.

🔹 5. Formations Online

Affiche toutes les formations créées par les utilisateurs.

Présentation sous forme de “boutique de formations”.

Chaque utilisateur peut voir :

nom

prénom

titre de la formation

contenu de la formation

🛠 Technologies utilisées
Frontend

Angular

HTML / CSS

Typescript

Backend

Node.js / Express

MongoDB

📁 Structure du projet
my-project1/
│
├── frontend/
│   └── src/app/
│       ├── home/
│       ├── login/
│       ├── sign-up/
│       ├── formation-online/
│       └── dashboard/
│
└── backend/
    ├── server.js
    ├── models/
    └── routes/
▶️ Lancer le projet
Frontend
cd frontend
npm install
ng serve --open

Backend
cd backend
npm install
node server.js

🧑‍💻 Auteur

Mohamed Ali Mlik
s
GitHub : https://github.com/Mohamed-ali-mliki