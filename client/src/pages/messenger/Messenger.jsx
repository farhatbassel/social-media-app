import './messenger.scss'
import Navbar from '../../components/navbar/Navbar'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'

export default function Messenger() {
    return (
        <>
            <Navbar />
            <div className="messenger">
                <section className='chat-menu'>
                    <div className="chat-menu-wrapper">
                        <input type="text" placeholder='Search for friends' className='chat-menu-input' />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                    </div>
                </section>
                <section className='chat-box'>
                    <div className="chat-box-wrapper">
                        <div className="chat-box-top">
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message />
                            <Message own={true} />
                            <Message />
                        </div>
                        <div className="chat-box-bottom">
                            <textarea placeholder='Message' className='chat-box-message'></textarea>
                            <button className="chat-submit-button">Send</button>
                        </div>
                    </div>
                </section>
                <section className='chat-online'>
                    <div className="chat-online-wrapper">
                        <ChatOnline />
                    </div>
                </section>
            </div>
        </>
    )
}
