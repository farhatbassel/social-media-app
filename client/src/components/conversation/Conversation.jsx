import './conversation.scss'

export default function Conversation() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className='conversation'>
            <img src={PF + "person/noAvatar.png"} className='conversation-image' alt="" />
            <span className="conversation-name">Name</span>
        </div>
    )
}
