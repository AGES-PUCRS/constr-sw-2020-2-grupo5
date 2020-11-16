require("../models/ContentModel");

const mongoose = require("mongoose");
const axios = require('axios');

const Content = mongoose.model("Content");
const classesURL = 'http://ec2-18-218-177-125.us-east-2.compute.amazonaws.com:3000/api/v1/classes';

module.exports = {
  async listAllContents(req, res) {
    try {
      const contents = await Content.find(req.query);
      res.status(200)
      return res.json(contents);
    } catch {
      res.status(400)
      return res.send("Erro ao buscar Conteudos")
    }

  },

  async getContentById(req, res) {
    const { id } = req.params;
    try {
      let content = await Content.findById(id);
      if (req.query.expand === 'aulas') {
        const resp = await axios.get('http://ec2-18-218-177-125.us-east-2.compute.amazonaws.com:3000/api/v1/classes');
        const classes = resp.data.data;
        const respFilter = classes ? classes.filter(item => {
          return item.content === id
        }
      ) : [];

        respFilter.map(x => {
          content.aulas.push(x);
        })
      }
      res.status(200);
      return res.json(content);
    } catch {
      res.status(400)
      return res.send(`Erro ao buscar conteúdo com o id ${id}`)
    }
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
