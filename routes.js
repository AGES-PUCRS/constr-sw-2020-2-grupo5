const database = require('./services/database');

module.exports = function routes({ app }) {
  app.get('/', (req, res) => {
    console.log("GET /");
    res.status(200).json({
      message: 'Routing sample'
    });
  });
}