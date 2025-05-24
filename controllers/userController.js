const UsuarioModel = require('../models/userModel');

const UsuarioController = {
  async listarUsuarios(req, res) {
    try {
      const usuarios = await UsuarioModel.getAllUsuarios();
      return res.status(200).json(usuarios);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar usuários' });
    }
  },

  async obterUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuario = await UsuarioModel.getUsuarioById(id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      return res.status(200).json(usuario);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter usuário' });
    }
  },

  async criarUsuario(req, res) {
    try {
      const novoUsuario = await UsuarioModel.createUsuario(req.body);
      return res.status(201).json(novoUsuario);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
};

module.exports = UsuarioController;