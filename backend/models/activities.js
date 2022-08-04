const { Schema } = require('mongoose')

const activitiesSchema = new Schema({
  org: { type: String, required: true },
  dates: { type: String, required: true },
  roles: [{ type: String }],
  summary: { type: String }
})

module.exports = activitiesSchema
