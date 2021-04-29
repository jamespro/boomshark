const Dash = require('../models/profile')

module.exports = {
    //retrieve Posts
    getPosts: async (req,res)=>{
        console.log(req.user)
        try{
            const postTitle = await Dash.find({userId:req.user.id})
            const postCaption = await Dash.countDocuments({userId:req.user.id,completed: false})
            res.render('dash.ejs', {title: postTitle, caption: postCaption, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    //create Post, the action is found in .views/dash.ejs
    createPost: async (req, res)=>{
        try{
            await Dash.create({title: req.body.postTitle, caption: req.body.postCaption, userId: req.user.id})
            console.log('Post has been added!')
            res.redirect('/profile')
        }catch(err){
            console.log(err)
        }
    },
//     markComplete: async (req, res)=>{
//         try{
//             await Dash.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: true
//             })
//             console.log('Marked Complete')
//             res.json('Marked Complete')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     markIncomplete: async (req, res)=>{
//         try{
//             await Dash.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: false
//             })
//             console.log('Marked Incomplete')
//             res.json('Marked Incomplete')
//         }catch(err){
//             console.log(err)
//         }
//     },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Dash.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    
