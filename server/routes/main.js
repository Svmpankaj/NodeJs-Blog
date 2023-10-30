const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/**
 * GET /
 * HOME
 */
router.get('', (req, res) => {
    const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog create with NodeJs, Express & MongoDB."
    }

    res.render('index', locals);
});


function insertPostData() {
    Post.insertMany([
        {
            title: "Building APIs with Node.js",
            body: "Learn how to use Node.js to build RESTful APIs using frameworks like Express.js"
        },

    ])
}

insertPostData();



router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;