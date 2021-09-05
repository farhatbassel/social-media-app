import './post.scss'
import { MoreVert } from '@material-ui/icons'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'

export default function Post({ post }) {

    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const { user: currentUser } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)
        }
        fetchUser()
    }, [post.userId])


    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    const likeHandler = () => {
        try {
            axios.put("/posts/" + post._id + "/like", { userId: currentUser._id })
        } catch (error) {
            console.log(error)
        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className="post-wrapper">
                <section className="post-top">
                    <div className="post-top-left">
                        <Link to={`/profile/${user.username}`}>
                            <img src={user.profilePictures ? user.profilePictures : PF + "person/noAvatar.png"} className='post-profile-image' alt="Profile" />
                        </Link>
                        <span className='post-username'>{user.username}</span>
                        <span className='post-date'>{format(post.createdAt)}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </section>
                <section className="post-center">
                    <span className="post-text">{post?.desc}</span>
                    <img src={PF + post.img} className='post-image' alt="" />
                </section>
                <section className="post-bottom">
                    <div className="post-bottom-left">
                        <img className='like-icon' src={`${PF}like.png`} onClick={likeHandler} alt="like" />
                        <img className='like-icon' src={`${PF}heart.png`} onClick={likeHandler} alt="heart" />
                        <span className="post-like-counter">{like}</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{post.comment} comments</span>
                    </div>
                </section>
            </div>
        </div>
    )
}
