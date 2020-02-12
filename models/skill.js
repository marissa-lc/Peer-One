const orm = require("../config/orm");

const skill = {
  findAll: async function() {
    const result = await orm.selectAll("skills");
    return result;
  }
};

module.exports = skill;