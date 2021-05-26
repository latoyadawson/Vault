const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
<<<<<<< HEAD
};

module.export = withAuth;
=======
  };
  
  module.exports = withAuth;
>>>>>>> 2e147df4783265264ab27ba060d8ca527c5a9534
