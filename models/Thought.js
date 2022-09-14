const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now, /// Use a getter method to format the timestamp on query
    },
    username: [
      {
        type: Schema.Types.ObjectId, /// Unsure if this is correct. Maybe it doesnt need to be in array? Becasue only 1 user per thought
        ref: 'Thought',
      },
    ],
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('friendCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
