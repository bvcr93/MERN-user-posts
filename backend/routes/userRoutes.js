const User = require('../models/userModel.js');
const Post = require('../models/PostModel.js');

const userRoutes = (app) => {
  app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users', error });
    }
    app.get('/users/:userId/with-posts', async (req, res) => {
        try {
          const userId = req.params.userId;
          const user = await User.findById(userId).populate('posts');
          res.status(200).json(user);
        } catch (error) {
          res.status(500).json({ message: 'Error fetching user with posts', error });
        }
      });
  });

  app.post('/users', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error });
    }
  });
};



module.exports = userRoutes;
