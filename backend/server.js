const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const formationsRoutes = require('./routes/formations');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// DB: استخدام قاعدة البيانات القديمة
mongoose.connect('mongodb://127.0.0.1:27017/formationdb') // لاحظ الأحرف الصغيرة
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/formations", formationsRoutes);

// Server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
