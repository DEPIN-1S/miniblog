const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddileware');
const { getPosts, createPost, deletePost, updatePost, getPostById } = require('../controller/blogingController');

router.get('/', authMiddleware, getPosts);

router.post('/', authMiddleware, createPost);

router.delete('/:id', authMiddleware, deletePost);

router.put('/:id', authMiddleware, updatePost);
router.get ('/:id',authMiddleware,getPostById)

module.exports = router;