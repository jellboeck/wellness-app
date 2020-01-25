// bcrypt used for password hashing. use bcryptjs version as the regular bcrypt module can cause errors on Windows machines
var bcrypt = require("bcryptjs");
// create User model
console.log('user');
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // email cannot be null and must be proper email
    firstname: {
      type: DataTypes.STRING,
      validate: {
        len: {
            args: [1, 25],
            message: 'Event must be between 1 and 25 characters in length.'
        }
    }
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        len: {
            args: [1, 25],
            message: 'Event must be between 1 and 25 characters in length.'
        }
    }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    },
    motivation: {
      type: DataTypes.STRING,
      validate: {
        len: {
            args: [1, 255],
            message: 'Event must be between 1 and 255 characters in length.'
        }
    }
    },
    heightft: {
      type: DataTypes.INTEGER
    },
    heightin: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    bmigoal: {
      type: DataTypes.INTEGER
    },
    stepgoal: {
      type: DataTypes.INTEGER
    },
    steptotal: {
      type: DataTypes.INTEGER
    }
  });
// custom method for our User model to check if an unhashed password entered
  // by user can be compared to hashed password in database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // hooks are automatic methods run during various phases of User Model lifecycle
  // before a User is created, automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  // one user can have many steps
  User.associate = function (models) {
    User.hasMany(models.steps, {
      onDelete: 'cascade'
    });
  };

  return User;
};
