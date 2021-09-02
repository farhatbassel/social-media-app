import './feed.scss'
import Share from "../share/Share"
import Post from '../post/Post'
import { Posts } from '../../dummyData'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed-wrapper">
                <Share />
                {Posts.map((post => {
                    return <Post key={post.id} post={post} />
                }))}
            </div>
        </div>
    )
}
