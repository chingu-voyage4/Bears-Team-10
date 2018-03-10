const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcyrpt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  provider: {
    type: String,
    enum: ['local', 'github', 'google', 'facebook'],
    required: true
  },

  local: {
    displayName: String,
    email: {
      type: String,
      lowercase: true
    },
    password: String,
    photoURL: String,
  },

  github: {
    displayName: String,
    id: String,
    email: {
      type: String,
      lowercase: true
    },
    photoURL: String,
  },

  google: {
    displayName: String,
    id: String,
    email: {
      type: String,
      lowercase: true
    },
    photoURL: String,
  },

  facebook: {
    displayName: String,
    id: String,
    email: {
      type: String,
      lowercase: true
    },
    photoURL: String,
  }
});

// On Save Hook encrypt password
UserSchema.pre('save', function (next) {
  if (this.provider !== 'local') {
    return next();
  }

  const user = this;
  if (user.password) {
    bcyrpt.genSalt(10, function (err, salt) {
      bcyrpt.hash(user.local.password, salt, null, function (err, hash) {
        if (err) { return next(err); }
        user.local.password = hash;
        next();
      });
    })
  }
});

UserSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcyrpt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) { return callback(err) }

    callback(null, isMatch);
  });
}

module.exports = mongoose.model('User', UserSchema);