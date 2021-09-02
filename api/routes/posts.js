const router = require('express').Router()
const Post = require('../models/Post')
const User = require("../models/User")

router.post("/", async (req, res)=>{
    const newPost = new Post(req.body)
    try {
        const savePost = await newPost.save()
        res.status(200).json(savePost)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id", async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body})
            res.status(200).json('Post updated')
        }else{
            res.status(403).json('You can only update your posts')
        }
    }catch(error){
        res.status(500).json(error)
    }
})

router.delete("/:id", async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.deleteOne()
            res.status(200).json('Post deleted')
        }else{
            res.status(403).json('You can only delete your own posts')
        }
    }catch(error){
        res.status(500).json(error)
    }
})

router.put("/:id/like", async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json('Post liked')
        } else{
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json('Disliked')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/:id", async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/timeline/all", async(req, res)=>{
    let postArray = []
    try {
        const currentUser = await User.findById(req.body.userId)
        const userPosts = await Post.find({userId: currentUser._id})
        const friendPost = await Promise.all(
            currentUser.followings.map(friendId =>{
                return Post.find({userId:friendId})
            })
        )
        res.json(userPosts.concat(...friendPost))
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router