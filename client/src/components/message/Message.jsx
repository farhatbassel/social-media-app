import './message.scss'
import { format } from 'timeago.js'
export default function Message({ message, own }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className={own ? 'message own' : 'message'}>
            <div className="message-top">
                <img src={PF + "person/noAvatar.png"} className='message-image' alt="" />
                <p className="message-text">{message.text}</p>
            </div>
            <div className="message-bottom">{format(message.createdAt)}</div>
        </div>
    )
}
