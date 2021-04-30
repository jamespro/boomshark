const Post = require('../models/Post')

module.exports = {
    //retrieve Posts
    getPost: async (req,res)=>{
        console.log(req.client.collections)
        // console.log(req.user)
        try{
            const postTitle = await Post.find({userId:req.user.id})
            const postCaption = await Post.countDocuments({userId:req.user.id})
            res.render('feed.ejs', {title: postTitle, caption: postCaption, user: req.user})
        }catch(err){
            console.log(err)
        }
    }
}    
