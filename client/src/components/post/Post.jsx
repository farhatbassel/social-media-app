import './post.scss'
import { MoreVert } from '@material-ui/icons'
import likeImage from '../../assets/like.png'
import heartImage from '../../assets/heart.png'
import { Users } from '../../dummyData'
import { useState } from 'react'

export default function Post({ post }) {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className="post-wrapper">
                <section className="post-top">
                    <div className="post-top-left">
                        <img src={Users.filter(u => u.id === post?.userId)[0].profilePicture} className='post-profile-image' alt="" />
                        <span className='post-username'>{Users.filter(u => u.id === post?.userId)[0].username}</span>
                        <span className='post-date'>{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </section>
                <section className="post-center">
                    <span className="post-text">{post?.desc}</span>
                    <img src={post.photo} className='post-image' alt="" />
                </section>
                <section className="post-bottom">
                    <div className="post-bottom-left">
                        <img className='like-icon' src={likeImage} onClick={likeHandler} alt="like-image" />
                        <img className='like-icon' src={heartImage} onClick={likeHandler} alt="heart-image" />
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
