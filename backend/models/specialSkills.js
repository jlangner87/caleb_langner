const { Schema } = require('mongoose')

const specialSkillsSchema = new Schema({
  skill: { type: String, required: true }
})

module.exports = specialSkillsSchema
