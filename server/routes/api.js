const express = require("express");
const Freelancer = require("../models/freelancer");
const router = express.Router();

//find all
router.get("/freelance", function (req, res, next) {
  Freelancer.find()
    .then((freelancer) => {
      res.send(freelancer);
    })
    .catch(next);
});

//find one
router.get("/freelance/:id", function (req, res, next) {
  Freelancer.findById(req.params.id)
    .then((freelancer) => {
      if (!freelancer) {
        return next();
      }
      res.send(freelancer);
    })
    .catch(next);
});

router.post("/freelance", function (req, res, next) {
  Freelancer.create(req.body)
    .then(function (freelancer) {
      res.send(freelancer);
    })
    .catch(next);
});

router.put("/freelance/:id", function (req, res, next) {
  //once update have completed, findOne that updated data from db
  Freelancer.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    function () {
      Freelancer.findOne({ _id: req.params.id }).then(function (freelancer) {
        res.send(freelancer);
      });
    }
  );
});

router.delete("/freelance/:id", function (req, res, next) {
  Freelancer.findByIdAndRemove({ _id: req.params.id }).then(function (
    freelancer
  ) {
    res.send(freelancer);
  });
});

module.exports = router;
