const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
  handleCameraUpload: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      // Create a new post with minimal information
      await Post.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: "Uploaded from EINAR camera",
        likes: 0,
        user: req.user.id,
      });

      console.log("Camera image has been uploaded!");
      res.status(200).json({ message: "Upload successful" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error in upload" });
    }
  }
};
