import './chatOnline.scss'

export default function ChatOnline() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className='chat-online'>
            <div className="chat-online-friend">
                <div className="chat-online-image-container">
                    <img className='chat-online-image' src={PF + "person/noAvatar.png"} alt="" />
                    <div className="chat-online-badge"></div>
                </div>
                <span className="chat-online-name">John Doe</span>
            </div>
            <div className="chat-online-friend">
                <div className="chat-online-image-container">
                    <img className='chat-online-image' src={PF + "person/noAvatar.png"} alt="" />
                    <div className="chat-online-badge"></div>
                </div>
                <span className="chat-online-name">John Doe</span>
            </div>
            <div className="chat-online-friend">
                <div className="chat-online-image-container">
                    <img className='chat-online-image' src={PF + "person/noAvatar.png"} alt="" />
                    <div className="chat-online-badge"></div>
                </div>
                <span className="chat-online-name">John Doe</span>
            </div>
            <div className="chat-online-friend">
                <div className="chat-online-image-container">
                    <img className='chat-online-image' src={PF + "person/noAvatar.png"} alt="" />
                    <div className="chat-online-badge"></div>
                </div>
                <span className="chat-online-name">John Doe</span>
            </div>
            <div className="chat-online-friend">
                <div className="chat-online-image-container">
                    <img className='chat-online-image' src={PF + "person/noAvatar.png"} alt="" />
                    <div className="chat-online-badge"></div>
                </div>
                <span className="chat-online-name">John Doe</span>
            </div>
        </div>
    )
}

