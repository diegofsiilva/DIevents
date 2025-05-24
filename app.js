const express = require('express');
const app = express();
const path = require('path');
const alunosRoutes = require('./routes/alunos');
const bodyParser = require('body-parser');
require('dotenv').config();
const usuarioRoutes = require('./routes/userRoutes');
const cursosRoutes = require('./routes/curso');
app.use('/cursos', cursosRoutes);

app.use('/api', usuarioRoutes);
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/alunos', alunosRoutes);

app.get('/', (req, res) => {
  res.redirect('/alunos');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const professoresRoutes = require('./routes/professores');
app.use('/professores', professoresRoutes);
