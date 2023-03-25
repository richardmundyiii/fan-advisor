const Stadium = require("../../models/stadiums");

module.exports = {
  create,
};

function create(req, res) {
  Stadium.find({});
  res.send("working");
}
