const db = require('../config/db');

const UsuarioModel = {
  async getAllUsuarios() {
    const result = await db.query('SELECT * FROM usuarios');
    return result.rows;
  },

  async getUsuarioById(id) {
    const result = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return result.rows[0];
  },

  async createUsuario({ nome, email }) {
    const result = await db.query(
      'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    );
    return result.rows[0];
  }
};

module.exports = UsuarioModel;