const mongoose = require('mongoose')
const resumeSchema = require('./resume')
const otherExpSchema = require('./otherExperience')
const communityServiceSchema = require('./communityService')
const activitiesSchema = require('./activities')
const specialSkillsSchema = require('./specialSkills')

//Schema Imports
const Resume = mongoose.model('Resume', resumeSchema)
const OtherExp = mongoose.model('OtherExp', otherExpSchema)
const CommunityService = mongoose.model(
  'CommunityService',
  communityServiceSchema
)
const Activities = mongoose.model('Activities', activitiesSchema)
const SpecialSkills = mongoose.model('SpecialSkills', specialSkillsSchema)

module.exports = {
  Resume,
  OtherExp,
  CommunityService,
  Activities,
  SpecialSkills
}
