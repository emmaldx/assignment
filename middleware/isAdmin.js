// function to protect routes from non logged in users
function isAdmin(req, res, next) {
    if (req.session.user.roleId!=="ADMIN") {
      return res.redirect("/dashboard");
    }
    next();
  }
  module.exports = isAdmin;
  