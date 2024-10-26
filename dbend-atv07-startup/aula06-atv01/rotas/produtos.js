const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { Produto } = require('../models');

router.post('/:id/upload', upload.single('image'), async (req, res) => {
  const id = req.params.id;
  try {
    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.status(404).json({ msg: "Produto não encontrado!" });
    }

    if (req.file) {
      produto.imagem = `/static/uploads/${req.file.filename}`;
      await produto.save();

      return res.json({ msg: "Imagem carregada com sucesso!", imagem: produto.imagem });
    } else {
      return res.status(400).json({ msg: "Erro ao fazer upload da imagem." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

router.use('/static', express.static('public/uploads'));

module.exports = router;