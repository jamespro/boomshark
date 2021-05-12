const cloudinary = require("../middleware/cloudinary");
//this is not in the example:
//const { ObjectID } = require('bson');
const Post = require('../models/Post')

module.exports = {
    getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
//   FEED WILL GO HERE
    
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render('feed.ejs', { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },

    //retrieve Posts
    getPost: async (req,res)=>{
        //console.log(req.user)
       
        try {
            const post = await Post.findById(req.params.id);
            res.render('post.ejs', {
                post: post,
                user: req.user
            })
        }catch(err){
            console.log(err)
        }
    },
    //create Post, the action is found in .views/dash.ejs
    createPost: async (req, res)=>{
        try{
            // Upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);

            await Post.create({
                title: req.body.postTitle,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                caption: req.body.postCaption,
                link: req.body.postLink,
                likes: 0,
                user: req.user.id
            })
            console.log('Post has been added!')
            res.redirect('/profile')
        }catch(err){
            console.log(err)
        }
    },
    //likePost will go here
    //this is quite different from the example:
    addLike: async (req, res)=>{

        console.log("chieck")
        try {
            
            await Post.updateOne({
                _id: req.params.id,
            },{
                $set: {likes: req.body.like+1}
            })
        } catch (error) {
            console.log(error)
        }
        res.json("Like")

    },

    deletePost: async (req, res)=>{

        console.log(req.params.id)

        try {
            // Find post by id
            let post = await Post.findById({ _id: req.params.id });
            // Delete image from cloudinary
            await cloudinary.uploader.destroy(post.cloudinaryId);
            // Delete post from db
            await Post.remove({ _id: req.params.id });
            console.log("Deleted Post");
            res.redirect("/profile");
        } catch (err) {
            res.redirect("/profile");
        }
    },
}    
