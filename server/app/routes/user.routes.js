// const { authJwt } = require("../middleware");
// const controller = require("../controllers/user.controller");

module.exports = app =>{
  var router = require("express").Router();
  const { authJwt } = require("../middleware");
  const controller = require("../controllers/user.controller");

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get("/all", controller.allAccess);

  router.get(
    "/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  router.get(
    "/rep",
    [authJwt.verifyToken, authJwt.isReparateur],
    controller.reparateurBoard
  );

  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.use('/api/test', router);

};
