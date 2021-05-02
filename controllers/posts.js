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
  //FEED WILL GO HERE
    //
//   getFeed: async (req, res) => {
//     try {
//       const posts = await Post.find().sort({ createdAt: "desc" }).lean();
//       res.render("feed.ejs", { posts: posts });
//     } catch (err) {
//       console.log(err);
//     }
//   },

    //retrieve Posts
    getPost: async (req,res)=>{
        console.log(req.user)
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
            await Post.create({
                title: req.body.postTitle,
                image: req.body.postImage,
                caption: req.body.postCaption,
                link: req.body.postLink,
                user: req.user.id
            })
            console.log('Post has been added!')
            res.redirect('/profile')
        }catch(err){
            console.log(err)
        }
    },
    //likePost will go here
    deletePost: async (req, res)=>{
        console.log(req.body.postIdFromJSFile)
        try{
            await Post.findOneAndDelete({_id:req.body.postIdFromJSFile})
            console.log('Deleted Post')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    