const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

//index route
router.get("/", (req, res) => {
  Article.find({}, (err, allArticles) => {
    if (err) {
      res.send(err);
    } else {
      res.render("articles/index.ejs", { articles: allArticles });
    }
  });
});

//new route
router.get("/new", (req, res) => {
  res.render("articles/new.ejs");
});

//show route
router.get("/:id", (req, res) => {
  Article.findById(req.params.id, (err, foundArticle) => {
    if (err) {
      res.send(err);
    } else {
      res.render("articles/show.ejs", { article: foundArticle });
    }
  });
});

//edit route
router.get("/:id/edit", (req, res) => {
  Article.findById(req.params.id, (err, articleToEdit) => {
    if (err) {
      res.send(err);
    } else {
      res.render("articles/edit.ejs", { article: articleToEdit });
    }
  });
});

//create route
router.post("/", (req, res) => {
  Article.create(req.body, (err, newArticle) => {
    if (err) {
      res.send(err);
    } else {
      console.log(newArticle);
      res.redirect("/articles");
    }
  });
});

//update route
router.put("/:id", (req, res) => {
  Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedArticle) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect(`/articles/${updatedArticle.id}`);
      }
    }
  );
});

//destroy route
router.delete("/:id", (req, res) => {
    Article.findByIdAndDelete(req.params.id, (err,response)=>{
        if(err){
            res.send(err)
        }else{
            res.redirect('/articles')
        }
    })
});

module.exports = router;
