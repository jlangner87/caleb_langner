const { Schema } = require('mongoose')

const communityServiceSchema = new Schema({
  org: { type: String, required: true },
  dates: { type: String, required: true },
  summary: { type: String }
})

module.exports = communityServiceSchema
