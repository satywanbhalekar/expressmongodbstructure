const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;


  


checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
      // Username
      const existingUser = await User.findOne({ username: req.body.username }).exec();
      if (existingUser) {
        return res.status(400).send({ message: "Failed! Username is already in use!" });
      }
  
      // Email
      const existingEmail = await User.findOne({ email: req.body.email }).exec();
      if (existingEmail) {
        return res.status(400).send({ message: "Failed! Email is already in use!" });
      }
  
      next(); // Move to the next middleware/route handler
    } catch (error) {
      console.error("Error checking duplicate username or email:", error);
      res.status(500).send({ message: "Internal server error" });
    }
  };
  
// checkRolesExisted = (req, res, next) => {
//   if (req.body.roles) {
//     for (let i = 0; i < req.body.roles.length; i++) {
//       if (!ROLES.includes(req.body.roles[i])) {
//         res.status(400).send({
//           message: `Failed! Role ${req.body.roles[i]} does not exist!`
//         });
//         return;
//       }
//     }
//   }

//   next();
// };

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  // checkRolesExisted
};

module.exports = verifySignUp;