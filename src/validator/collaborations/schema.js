const Joi = require('joi');

const CollaborationPyaloadSchema = Joi.object({
  noteId: Joi.string().required(),
  userId: Joi.string().required(),
});

module.exports = { CollaborationPyaloadSchema };