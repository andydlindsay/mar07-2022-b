const express = require('express');
const router = express.Router();

const blogpostRouter = (db) => {

  // GET /blogposts/
  router.get('/', (req, res) => {
    db.query('SELECT * FROM posts;')
      .then((response) => {
        res.json(response.rows);
      });
  });

  // custom middleware
  router.use((req, res, next) => {
    // if (!req.session.user_id) {
    //   res.redirect('/login');
    // }
    console.log('middleware from blogpost router');
    next();
  });

  // GET /blogposts/:id
  router.get('/:id', (req, res) => {
    db.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
      .then((response) => {
        res.json(response.rows[0]);
      });
  });

  // return the router
  return router;
};

module.exports = blogpostRouter;
