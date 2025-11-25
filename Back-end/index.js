const express = require('express');
const app = express();
const conexao = require('./db'); // conexão com MySQL

app.use(express.json());


const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Teste de conexão
conexao.query('SELECT 1 + 1 AS resultado', (err, rows) => {
  if (err) throw err;
  console.log('Resultado da consulta:', rows[0].resultado);
});

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo à Hamburgueria!');
});

// Rota para validar usuário logado (simulado)
app.get('/usuario-logado', (req, res) => {
  const usuarioSimulado = {
    id: 1,
    nome: 'Gustavo Silva',
    email: 'gustavo@hamburgueria.com'
  };
  res.json(usuarioSimulado);
});

// Rota para registrar usuário
app.post('/registro', (req, res) => {
  const { nom_user, tel_user, senha_user } = req.body;

  conexao.query(
    'INSERT INTO usuario (nom_user, tel_user, senha_user) VALUES (?, ?, ?)',
    [nom_user, tel_user, senha_user],
    (err, results) => {
      if (err) {
        console.error('Erro ao registrar usuário:', err);
        return res.status(500).json({ message: 'Erro ao registrar usuário' });
      }
      res.status(201).json({
        message: 'Usuário registrado com sucesso',
        userId: results.insertId
      });
    }
  );
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
