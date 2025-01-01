const cloudinary = require("../middleware/cloudinary");
const mongoose = require('mongoose');
const Post = require("../models/Post");

module.exports = {
  handleCameraUpload: async (req, res) => {
    try {
      console.log("Received upload request");
      console.log("File:", req.file);
      console.log("Body:", req.body);
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      // Create a new post with minimal information
      //   await Post.create({
      //     image: result.secure_url,
      //     cloudinaryId: result.public_id,
      //     caption: "Uploaded from EINAR camera",
      //     likes: 0,
      //     user: req.user ? req.user.id : null, // Add this check. TODO: Later, require a user to be logged in for security.
      //   });

    //   await Post.create({
    //     title: "Camera Upload", // Set a default title or extract from event_descriptor
    //     image: result.secure_url,
    //     cloudinaryId: result.public_id,
    //     caption: req.body.event_descriptor
    //       ? JSON.parse(req.body.event_descriptor).EventInfo.Text
    //       : "Camera Upload",
    //     link: "", // Set a default link if required
    //     likes: 0,
    //     user: "WHAT_DO_I_PUT_HERE", // Set a default user for camera uploads
    //   });

      await Post.create({
        title: "Camera Upload", // Set a default title or extract from event_descriptor
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.event_descriptor
          ? JSON.parse(req.body.event_descriptor).EventInfo.Text
          : "Camera Upload",
        link: "", // Set a default link if required
        likes: 0,
        user: mongoose.Types.ObjectId(process.env.DEFAULT_USER_ID), // Use a specific user's ObjectId
      });

      console.log("Camera image has been uploaded!");
      res.status(200).json({ message: "Upload successful" });
    } catch (err) {
      console.error("Upload error:", err);
      res.status(500).json({ error: "Error in upload" });
    }
  },
};
