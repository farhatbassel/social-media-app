import './online.scss'

export default function Online({ user }) {
    return (
        <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
                <img className='rightbar-profile-image' src={user.profilePicture} alt="" />
                <span className="rightbar-online"></span>
            </div>
            <span className='rightbar-username'>{user.username}</span>
        </li>
    )
}
