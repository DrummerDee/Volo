const Friend = require('../models/Friend')
const User = require('../models/User')

module.exports = {
    getAllFriends: async (req,res)=>{
        console.log(req.user)
        try{
            const friends = await Friend.find({user1:req.user.id})
            res.send(friends)
           // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getAllUsers: async (req,res)=>{
    try{
            const users = await User.find({ _id: { $ne: req.user.id } })
            res.send({users: users, authUserId: req.user.id})
           // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    searchUsers: async (req,res)=>{
        console.log(typeof(req.params.query))
    try{
        const users = await User.find({userName: {$regex: new RegExp(req.params.query,'i')}, _id: { $ne: req.user.id }}).lean()
        console.log(users)
        res.send({users: users})
           // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },

    addFriend: async (req, res)=>{
        console.log(req.user)

        try{
            await Friend.create({user1: req.body.user1, user2: req.body.user2, approved: true})
            console.log('Friend request sent!')
            res.status(200).send('request sent')
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    