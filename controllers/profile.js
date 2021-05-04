// const Post = require('../models/Post')

// module.exports = {
//     //retrieve Posts
//     getPost: async (req,res)=>{
//         console.log(req.user)
//         try{
//             const postTitle = await Post.find({user:req.user.id})
//             const postCaption = await Post.countDocuments({user:req.user.id})
// //TODO: FIX THESE, THESE ARE NOT RIGHT. WE NEED TO GET THE DETAILS OF EACH POST
//             const postImage = await Post.countDocuments({user:req.user.id})
//             const postLink = await Post.countDocuments({user:req.user.id})
//             res.render('profile.ejs', {
//                 title: postTitle,
//                 caption: postCaption,
//                 image: postImage,
//                 link: postLink,
//                 user: req.user
//             })
//         }catch(err){
//             console.log(err)
//         }
//     },
//     //create Post, the action is found in .views/dash.ejs
//     createPost: async (req, res)=>{
//         try{
//             await Post.create({
//                 title: req.body.postTitle,
//                 caption: req.body.postCaption,
//                 image: req.body.postImage,
//                 link: req.body.postLink,
//                 user: req.user.id
//             })
//             console.log('Post has been added!')
//             res.redirect('/profile')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     deletePost: async (req, res)=>{
//         console.log(req.body.postIdFromJSFile)
//         try{
//             await Post.findOneAndDelete({_id:req.body.postIdFromJSFile})
//             console.log('Deleted Post')
//             res.json('Deleted It')
//         }catch(err){
//             console.log(err)
//         }
//     }
// }    
