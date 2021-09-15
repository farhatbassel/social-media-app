import React from 'react'

export default function Followings({ friend }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="rightbar-following">
            <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"} alt="" className="rightbar-following-image" />
            <span className="rightbar-following-name">{friend.username}</span>
        </div>
    )
}
