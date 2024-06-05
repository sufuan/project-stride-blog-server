// const Post = require("../models/Post");

// exports.createpost = async (req, res) => {
//   try {
//     const { title, body, author } = req.body;

//     const post = new Post({
//       title,
//       body,
//       author,
//     });

//     await post.save();

//     res.status(201).json({ message: "Post created successfully", post });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating post", error });
//   }
// };

// exports.readpost = async (req, res) => {
//   try {
//     const userId = req.params.userId;

//     const posts = await Post.find({ author: userId }).populate("author");

//     res.status(200).json(posts);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error reading post(s)", error: error.message });
//   }
// };

// exports.updatepost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, body } = req.body;

//     const post = await Post.findByIdAndUpdate(
//       id,
//       { title, body },
//       { new: true }
//     );

//     res.status(200).json({ message: "Post updated successfully", post });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error updating post", error: error.message });
//   }
// };

// exports.deletepost = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await Post.findByIdAndDelete(id);

//     res.status(200).json({ message: "Post deleted successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error deleting post", error: error.message });
//   }
// };

const Post = require("../models/Post");

// exports.createpost = async (req, res) => {
//   try {
//     const { title, body, author } = req.body;

//     const post = new Post({
//       title,
//       body,
//       author,
//     });

//     await post.save();

//     res.status(201).json({ message: "Post created successfully", post });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating post", error });
//   }
// };

exports.createpost = async (req, res) => {
  try {
    const { title, body, author } = req.body;

    const post = new Post({
      title,
      body,
      author,
      imageUrl:
        "http://biginja.com/treats/wp-content/uploads/2013/03/featured-blog-post-image-1024x574.jpg",
    });

    await post.save();

    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
};

exports.readpost = async (req, res) => {
  try {
    const userId = req.params.userId;

    const posts = await Post.find({ author: userId }).populate("author");

    res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error reading post(s)", error: error.message });
  }
};

exports.updatepost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;

    const post = await Post.findByIdAndUpdate(
      id,
      { title, body },
      { new: true }
    );

    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating post", error: error.message });
  }
};

exports.deletepost = async (req, res) => {
  try {
    const { id } = req.params;

    await Post.findByIdAndDelete(id);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author");
    res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate("author");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching post", error: error.message });
  }
};
