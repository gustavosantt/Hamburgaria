const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Gustavo8281',
  database: 'burguer'
});

conexao.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  }
});


module.exports = conexao;
