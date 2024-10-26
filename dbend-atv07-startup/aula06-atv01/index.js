const express = require('express');
const app = express();
const produtoRoutes = require('./routes/produtos'); 

app.use(express.json()); 
app.use('/produto', produtoRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});