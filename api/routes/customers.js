const express = require("express");
const mongoose = require("mongoose");
const Customer = require("../models/customer");
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  Customer.find({ email: req.body.email })
    .exec()
    .then((docs) => {
      if (docs.length <= 0) {
        bcrpyt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              message: error,
            });
          }
          const user = new Customer({
            _id: new mongoose.Types.ObjectId(),
            fullname: req.body.fullname,
            email: req.body.email,
            password: hash,
          });
          user
            .save()
            .then((result) => {
              const token = jwt.sign(
                {
                  email: req.body.email,
                  fullname: req.body.fullname,
                },
                process.env.JWT_KEY,
                {
                  expiresIn: "1h",
                }
              );
              res.status(200).json({
                message: "User created successfully",
                token: token,
              });
            })
            .catch((error) => res.status(500).json({ message: error }));
        });
      } else {
        return res.status(422).json({ message: "Email already exist" });
      }
    });
});

router.post("/signin", (req, res, next) => {
  Customer.find({ email: req.body.email })
    .exec()
    .then((docs) => {
      if (docs.length <= 0) {
        return res.status(401).json({ message: "Authentication failed" });
      }
      bcrpyt.compare(req.body.password, docs[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Authentication failed",
          });
        }

        if (result) {
          const token = jwt.sign(
            {
              email: docs[0].email,
              fullname: docs[0].fullname,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h",
            }
          );

          return res.status(200).json({
            message: "Authentication successful",
            token: token,
          });
        }

        res.status(401).json({ message: "Authentication failed" });
      });
    })
    .catch((error) => res.status(500).json({ message: "error" }));
});

module.exports = router;
