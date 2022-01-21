![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# mongoose-associations-lesson
## Starter Code: [Associated Lesson](https://git.generalassemb.ly/seir-1213/Mongoose-CRUD-Lessons/blob/master/04_model_associations.md)
### Lesson / Lab example

Features:
two-model express / mongoose application
- RESTful routes
- basic templates for each model
- home template
- 404 template and wildcard route

### Models:

```js
// Article Model 
const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Untitled",
    required: true,
  },
  articleBody: {
    type: String,
    default: "Lorem Ipsum Dolor",
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;


```

```js
// Author Model 
const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        default: "Anonymous",
        required: true
    }
})

const Author = mongoose.model("Author", authorSchema)

module.exports = Author


```
### __Current file structure__
```bash
.
├── controllers
│   ├── articles.js
│   └── authors.js
├── models
│   ├── Article.js
│   └── Author.js
├── package-lock.json
├── package.json
├── public
│   └── css
│       └── style.css
├── server.js
└── views
    ├── 404.ejs
    ├── articles
    │   ├── edit.ejs
    │   ├── index.ejs
    │   ├── new.ejs
    │   └── show.ejs
    ├── authors
    │   ├── edit.ejs
    │   ├── index.ejs
    │   ├── new.ejs
    │   └── show.ejs
    └── home.ejs

```
