import './chatOnline.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ChatOnline({ onlineUsers, friends }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [onlineFriends, setOnlineFriends] = useState([])

    useEffect(() => {
        setOnlineFriends(friends.filter(friend => onlineUsers.includes(friend._id)))
    }, [onlineUsers, friends])

    // const handleClick = async (user) => {
    //     try {
    //         const res = await axios.get(`/conversations/find/${currentId}/${user._id}`)
    //         setCurrentChat(res.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <div className='chat-online'>
            {onlineFriends.map((online) => {
                return (
                    <div className="chat-online-friend" key={online._id}>
                        <div className="chat-online-image-container">
                            <img className='chat-online-image' src={online?.profilePicture ? PF + online.profilePicture : PF + "person/noAvatar.png"} alt="" />
                            <div className="chat-online-badge"></div>
                        </div>
                        <span className="chat-online-name">{online?.username}</span>
                    </div>
                )
            })}
        </div>
    )
}

