const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  titreFormation: { type: String, required: true },
  contenuFormation: { type: String, required: true },
  duree: { type: String, default: "À définir" }
});

module.exports = mongoose.model("User", userSchema);
