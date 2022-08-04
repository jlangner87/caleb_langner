const { Schema } = require('mongoose')

const otherExpSchema = new Schema({
  position: { type: String, required: true },
  school: { type: String, required: true },
  location: { type: String, required: true },
  dates: { type: String, required: true },
  summary: { type: String, required: true }
})

module.exports = otherExpSchema
