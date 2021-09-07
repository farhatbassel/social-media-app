import './message.scss'

export default function Message({ own }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className={own ? 'message own' : 'message'}>
            <div className="message-top">
                <img src={PF + "person/noAvatar.png"} className='message-image' alt="" />
                <p className="message-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            </div>
            <div className="message-bottom">1 hour ago</div>
        </div>
    )
}
