import './feed.scss'
import Share from "../share/Share"
import Post from '../post/Post'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Feed({ username }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("posts/timeline/612ce1617ff52d4815af354e")
            setPosts(res.data)
            console.log(res.data)
            console.log(posts)
        }
        fetchPosts()
    }, [username])

    return (
        <div className="feed">
            <div className="feed-wrapper">
                <Share />
                {posts.map((post => (
                    <Post key={post._id} post={post} />
                )))}
            </div>
        </div>
    )
}
