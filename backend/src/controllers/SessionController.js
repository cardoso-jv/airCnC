// index = lista várias sessões, show = lista unica sessão , store = cria sessão,
// update = modifica sessao , destroy = destroi sessao
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};