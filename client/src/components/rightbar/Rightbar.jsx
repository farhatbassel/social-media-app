import './rightbar.scss'
import { Users } from '../../dummyData'
import Online from '../online/Online'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Add, Remove } from '@material-ui/icons'


export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([])
    const { user: currentUser, dispatch } = useContext(AuthContext)
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id))

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get('/users/friends/' + user._id)
                setFriends(friendList.data)
            } catch (error) {
                console.log(error)
            }
        }
        getFriends()
    }, [user])

    const handleFollow = async () => {
        try {
            if (followed) {
                await axios.put('/users/' + user._id + '/unfollow', { userId: currentUser._id })
                dispatch({ type: 'UNFOLLOW', payload: user._id })
            } else {
                await axios.put('/users/' + user._id + '/follow', { userId: currentUser._id })
                dispatch({ type: 'FOLLOW', payload: user._id })
            }
        } catch (error) {
            console.log(error)
        }
        setFollowed(!followed)
    }

    const HomeRightbar = () => {
        return (
            <>
                <section className='birthday-container'>
                    <img src={`${PF}gift.png`} className='birthday-image' alt="" />
                    <span className="birthday-text"> <b>Pola Foster</b> and <b>3 other friends</b> have their birthday today.</span>
                </section>
                <img src={`${PF}lamaAd.png`} className='rightbar-ad' alt="" />
                <h4 className="rightbar-title">Online Friends</h4>
                <ul className="rightbar-friend-list">
                    {Users.map((user) => (
                        < Online key={user.id} user={user} />
                    ))}
                </ul>
            </>
        )
    }


    const ProfileRightbar = () => {
        return (
            <>
                {user.username !== currentUser.username && (
                    <button className="rightbar-follow-button" onClick={handleFollow}>
                        {followed ? 'Unfollow' : 'Follow'}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
                <h4 className='rightbar-title'>User information</h4>
                <section className="rightbar-info">
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">City:</span>
                        <span className="rightbar-info-value">{user.city}</span>
                    </div>
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">From:</span>
                        <span className="rightbar-info-value">{user.from}</span>
                    </div>
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">Status</span>
                        <span className="rightbar-info-value">{user.relationship === 1 ? 'Single' : user.relationship === 2 ? 'Married' : '-'}</span>
                    </div>
                </section>
                <h4 className="rightbar-followings-title">User Friends</h4>
                <section className="rightbar-followings">
                    {friends.map((friend) => (
                        <Link to={'/profile/' + friend.username} style={{ textDecoration: "none" }}>
                            <div className="rightbar-following">
                                <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"} alt="" className="rightbar-following-image" />
                                <span className="rightbar-following-name">{friend.username}</span>
                            </div>
                        </Link>
                    )
                    )}
                </section>
            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className="rightbar-wrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
