import './messenger.scss'
import Navbar from '../../components/navbar/Navbar'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { io } from 'socket.io-client'

export default function Messenger() {

    const [friends, setFriends] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [arrivalMessage, setArrivalMessage] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const { user } = useContext(AuthContext)
    const scrollRef = useRef()
    const socket = useRef()

    useEffect(() => {
        socket.current = io('ws://localhost:8900')
        socket.current.on('getMessage', data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            })
        })
    }, [])

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages(prev => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit('addUser', user._id)
        socket.current.on('getUsers', (users) => {
            setOnlineUsers(user.followings.filter((f) => users.some((u) => u.userId === f)))
        })
    }, [user])

    // Gets a conversation if available, else makes a new one and sets the created conversation to the current chat
    const handleConversation = async (friend) => {
        try {
            const res = await axios.get(`/conversations/find/${user._id}/${friend._id}`)
            if (res.data === null || res.data._id === undefined) {
                try {
                    const conversationMembers = {
                        senderId: user._id,
                        receiverId: friend._id
                    }
                    try {
                        const res = await axios.post('/conversations/', conversationMembers)
                        setCurrentChat(res.data)
                    } catch (error) {
                        console.log(error)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setCurrentChat(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleSendMessage = async (e) => {
        e.preventDefault()
        const message = {
            senderId: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        }


        const receiverId = currentChat.members.find(member => member !== user._id)
        socket.current.emit('sendMessage', {
            senderId: user._id,
            receiverId,
            text: newMessage
        })
        try {
            const res = await axios.post('/messages/', message)
            setMessages([...messages, res.data])
            setNewMessage("")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            } catch (error) {
                console.log(error);
            }
        };
        getFriends();
    }, [user]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get('/messages/' + currentChat?._id)

                setMessages(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMessages()
    }, [currentChat])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <>
            <Navbar />
            <div className="messenger">
                <section className='chat-menu'>
                    <div className="chat-menu-wrapper">
                        <input type="text" placeholder='Search for friends' className='chat-menu-input' />
                        {friends.map((friend) => {
                            return (
                                <div onClick={() => handleConversation(friend)}>
                                    <Conversation friend={friend} key={friend._id} currentUser={user} />
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section className='chat-box'>
                    <div className="chat-box-wrapper">
                        {currentChat ?
                            <>
                                <div className="chat-box-top">
                                    {messages.map((message) => {
                                        return (
                                            <div ref={scrollRef}>
                                                <Message message={message} key={message._id} own={message.senderId === user._id} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <form onSubmit={handleSendMessage} className="chat-box-bottom">
                                    <textarea placeholder='Message' className='chat-box-message' value={newMessage} onChange={(e) => setNewMessage(e.target.value)}></textarea>
                                    <button className="chat-submit-button" type='submit'>Send</button>
                                </form>

                            </> : <span className='no-conversation'>Open a conversation to start a chat</span>
                        }
                    </div>
                </section>
                <section className='chat-online'>
                    <div className="chat-online-wrapper">
                        <ChatOnline onlineUsers={onlineUsers} friends={friends} />
                    </div>
                </section>
            </div>
        </>
    )
}
