require('../models/ContentModel');

const mongoose = require('mongoose');
const Content = mongoose.model('Content');

module.exports = {
    

  async listAllContents(req, res) {
    const contents = await Content.find();
    console.log(contents);

    return res.json(contents);
  },

  async getContentById(req, res) {
    const { id } = req.params;

    const content = await Content.findById(id);
    console.log(content);
  },

  
  async deleteContent(req, res) {
    const { id } = req.params;

    const remove = await Content.findByIdAndRemove(id);

    console.log(remove);

  },
  
  async createContent(req, res) {
    console.log(req.body);

    const content = await Content.create(req.body);
  },

  async putContent(req, res) {
    const { id } = req.params;
    const { body } = req;

    const content = await Content.findByIdAndUpdate(id, body);
  },

  async patchContent(req, res) {
    const { id } = req.params;
    const { body } = req;

    const content = await Content.findByIdAndUpdate(id, body);
  },

}