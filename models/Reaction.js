const { Schema } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
      required: true,
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: [
      {
        type: Schema.Types.ObjectId, /// Unsure if this is correct. Maybe it doesnt need to be in array? Becasue only 1 user per reaction
        ref: 'Thought',
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now, /// Use a getter method to format the timestamp on query
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
