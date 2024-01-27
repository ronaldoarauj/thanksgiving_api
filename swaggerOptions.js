const path = require('path');

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Nome da Sua API',
    version: '1.0.0',
    description: 'Descrição da sua API',
  },
  // Caminho para os seus arquivos de rota
  apis: [path.join(__dirname, 'pages/api*.ts')],
};
