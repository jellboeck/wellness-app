console.log('api-routes');

// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });


  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // get user profile
  app.get("/api/user_profile", function (req, res) {
    console.log('user-req');
    console.log(req.user.email);
    // console.log('res');
    // console.log(res.req);
    // db.User.findOne({where:{id:5}})
    db.User.findOne({ where: { email: req.user.email } })
      // if (!req.user) {
      //   // The user is not logged in, send back an empty object
      //   res.json({});
      // } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      // res.json({
      //   email: req.user.email,
      //   id: req.user.id
      // });
      .then(function (results) {
        console.log('user-results');
        console.log(results.dataValues.email);
        res.json(results);
      })
    // }
  });

  // update user profile
  app.put("/api/update_profile", function (req, res) {
    console.log('req-profile');
    console.log(req.body);
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.User.update({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      motivation: req.body.motivation,
      heightft: req.body.heightft,
      heightin: req.body.heightin,
      weight: req.body.weight
    }, {
      where: {
        id: req.user.id
      }
    }).then(function (entries) {
      res.json(entries);
    });
  });



  // // get step data for logged in user
  app.get("/api/step_data", function (req, res) {
    console.log('step retrieval');
    console.log(req.user.id);
    db.steps.findAll({
      where: {
        UserId: req.user.id
      },
      order: [
        ['createdAt', 'DESC'],
      ]
      // include: [{
      //   model: db.User,
      //   required: true
      // }]
    }).then(function (results) {
      res.json(results);

    });
  });


  // // Add step for user
  app.post("/api/new_step", function (req, res) {
    console.log('req-step');
    // console.log(req);
    db.steps.create({
      quantity: req.body.quantity,
      // quantity: 1111,
      userEmail: req.body.userEmail,
      UserId: req.body.id
    }).then(function (results) {
      res.end();
    });

  });
  // // get BMI data for logged in user
  app.get("/api/bmi_data", function (req, res) {
    console.log('BMI retrieval');
    console.log(req.user.id);
    db.dataBMI.findAll({
      where: {
        UserId: req.user.id
      },
      order: [
        ['createdAt', 'DESC'],
      ]
      // include: [{
      //   model: db.User,
      //   required: true
      // }]
    }).then(function (results) {
      res.json(results);

    });
  });


  // // Add BMI data for user
  app.post("/api/new_bmi", function (req, res) {
    console.log('req-bmi');
    // console.log(req);
    db.dataBMI.create({
      storedCalc: req.body.storedCalc,
      userEmail: req.body.userEmail,
      UserId: req.body.id
    }).then(function (results) {
      res.end();
    });

  });



  //  // DELETE route for deleting entries. We can get the id of the todo to be deleted from
  //  // req.params.id
  //  app.delete("/api/event_del/:id", function(req, res) {
  //    // We just have to specify which event we want to destroy with "where"
  //    db.calendar.destroy({
  //      where: {
  //        id: req.params.id
  //      }
  //    }).then(function(entries) {
  //      res.json(entries);
  //    });

  //  });

  //  // PUT route for updating entries. We can get the updated entry data from req.body
  //  app.put("/api/event_update/:id", function(req, res) {
  //    // Update takes in an object describing the properties we want to update, and
  //    // we use where to describe which objects we want to update
  //    db.calendar.update({
  //      // month: req.body.month,
  //      // day: req.body.day,
  //      // year: req.body.year,
  //      // hour: req.body.hour,
  //      // min: req.body.min,
  //      // ampm: req.body.ampm,
  //      // event: req.body.event,
  //      event: req.body.event,
  //      // UserId: req.params.id
  //    }, {
  //      where: {
  //        id: req.params.id
  //      }
  //    }).then(function(entries) {
  //      res.json(entries);
  //    });
  //  });

};

