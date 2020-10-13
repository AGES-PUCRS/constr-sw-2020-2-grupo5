require("../models/ContentModel");

const mongoose = require("mongoose");
const Content = mongoose.model("Content");

module.exports = {
  async listAllContents(req, res) {
    const contents = await Content.find();
    console.log(contents);

    return res.json(contents);
  },

  async getContentById(req, res) {
    const { id } = req.params;
    try {
      const content = await Content.findById(id);
      console.log(content);
    } catch {}
  },

  async deleteContent(req, res) {
    const { id } = req.params;
    try {
      const remove = await Content.findByIdAndRemove(id);
      res.status(200);
      return res.send();
    } catch {
      res.status(404);
      res.send("Não foi possível deletar este objeto");
    }
  },

  async createContent(req, res) {
    console.log(req.body);

    try {
      const content = await Content.create(req.body);
      res.status(201);
      return res.json(content);
    } catch {
      res.status(302);
      res.send("Objeto já existe");
    }
  },

  async putContent(req, res) {
    const { id } = req.params;
    const { body } = req;

    try {
      const content = await Content.findByIdAndUpdate(id, body);
      res.status(200);
      return res.json(content);
    } catch {
      res.status(404);
      res.send("Não foi possível atualizar o objeto");
    }
  },

  async patchContent(req, res) {
    const { id } = req.params;
    const { body } = req;

    try {
      const content = await Content.findByIdAndUpdate(id, body);
      res.status(200);
      return res.json(content);
    } catch {
      res.status(404);
      res.send("Não foi possível atualizar o objeto");
    }
  },
};
