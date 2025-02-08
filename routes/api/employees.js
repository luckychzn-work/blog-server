const express = require('express');
const router = express.Router();
const blogsController = require('../../controllers/blogsController');

router.route('/')
    .get(blogsController.getAllBlogs)
    .post(blogsController.createNewBlog)
    .put(blogsController.updateBlog)
    .delete(blogsController.deleteBlog);

router.route('/:id')
    .get(blogsController.getBlog);

module.exports = router;