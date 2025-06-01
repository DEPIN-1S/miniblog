const Post = require('../models/Post');


const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({ author: req.user.userId });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = new Post({ title, content, author: req.user.userId });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        console.log('post delete', post);

        if (!post) return res.status(404).json({ message: 'Post not found' });

        if (post.author.toString() !== req.user.userId)
            return res.status(403).json({ message: 'Unauthorized' });

        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: 'Post deleted' });
    } catch (error) {
        console.error('Delete error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


const updatePost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        if (post.author.toString() !== req.user.userId)
            return res.status(403).json({ message: 'Unauthorized' });
        post.title = title;
        post.content = content;
        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        if (post.author.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        res.json(post);
    } catch (error) {
        console.error('Get post detail error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = { getPosts, createPost, deletePost, updatePost,getPostById };