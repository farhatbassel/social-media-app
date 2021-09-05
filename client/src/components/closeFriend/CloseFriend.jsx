import React from 'react'

export default function closeFriend({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <li className="sidebar-friend" >
            <img className='sidebar-friend-image' src={PF + user.profilePicture} alt='' />
            <span className='sidebar-friend-name'>{user.username}</span>
        </li >
    )
}
