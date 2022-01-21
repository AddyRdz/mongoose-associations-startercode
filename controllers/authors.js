const express = require("express");
const router = express.Router();
const Author = require("../models/Author");

//index route
router.get("/", (req, res) => {
  Author.find({}, (err, allAuthors) => {
    if (err) {
      res.send(err);
    } else {
      res.render("authors/index.ejs", { authors: allAuthors });
    }
  });
});

//new route
router.get("/new", (req, res) => {
  res.render("authors/new.ejs");
});

//show route
router.get("/:id", (req, res) => {
  Author.findById(req.params.id, (err, foundAuthor) => {
    if (err) {
      res.send(err);
    } else {
      res.render("authors/show.ejs", { author: foundAuthor });
    }
  });
});

//edit route
router.get("/:id/edit", (req, res) => {
  Author.findById(req.params.id, (err, authorToEdit) => {
    if (err) {
      res.send(err);
    } else {
      res.render("authors/edit.ejs", { author: authorToEdit });
    }
  });
});

//create route
router.post("/", (req, res) => {
  Author.create(req.body, (err, newAuthor) => {
    if (err) {
      res.send(err);
    } else {
      console.log(newAuthor);
      res.redirect("/authors");
    }
  });
});

//update route
router.put("/:id", (req, res) => {
  Author.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedAuthor) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect(`/authors/${updatedAuthor.id}`);
      }
    }
  );
});

//destroy route
router.delete("/:id", (req, res) => {
    Author.findByIdAndDelete(req.params.id, (err,response)=>{
        if(err){
            res.send(err)
        }else{
            res.redirect('/authors')
        }
    })
});

module.exports = router;
