import React from 'react'

export default function closeFriend({ friend }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <li className="sidebar-friend" >
            <img className='sidebar-friend-image' src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"} alt='' />
            <span className='sidebar-friend-name'>{friend.username}</span>
        </li >
    )
}
