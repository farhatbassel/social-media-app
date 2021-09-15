import './conversation.scss'

export default function Conversation({ friend }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className='conversation'>
            <img src={friend?.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"} className='conversation-image' alt="" />
            <span className="conversation-name">{friend?.username}</span>
        </div>
    )
}
