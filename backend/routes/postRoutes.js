const Post = require('../models/PostModel');
const User = require('../models/userModel');

const postRoutes = (app) => {
  app.post('/posts', async (req, res) => {
    try {
      const { userId, content } = req.body;

      const newPost = new Post({
        content,
        user: userId,
      });

      await newPost.save();

      // Update the user's posts
      const user = await User.findById(userId);
      user.posts.push(newPost._id);
      await user.save();

      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: 'Error creating post', error });
    }
  });
};

module.exports = postRoutes;
