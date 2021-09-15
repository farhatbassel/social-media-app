import './rightbar.scss'
import { Users } from '../../dummyData'
import Online from '../online/Online'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Add, Edit, Remove, Star } from '@material-ui/icons'
import InfoEdit from '../infoEdit/InfoEdit'
import DisplayInfo from '../displayInfo/DisplayInfo'
import Followings from '../following/Followings'

export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext)
    const [followed, setFollowed] = useState(true);
    const [favored, setFavored] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user?._id);
                setFriends(friendList?.data);
            } catch (error) {
                console.log(error);
            }
        };
        user && getFriends();
    }, [user]);

    const handleFollow = async () => {
        try {
            if (followed) {
                await axios.put(`/users/${user._id}/unfollow`, {
                    userId: currentUser._id,
                });
                dispatch({ type: "UNFOLLOW", payload: user._id });
            } else {
                await axios.put(`/users/${user._id}/follow`, {
                    userId: currentUser._id,
                });
                dispatch({ type: "FOLLOW", payload: user._id });
            }
        } catch (error) {
            console.log(error)
        }
        setFollowed(!followed);
    };

    const handleFavorite = async () => {
        try {
            if (favored) {
                await axios.put('/users/' + user._id + '/unfavorite', { userId: currentUser._id })
                dispatch({ type: 'UNFAVORITE', payload: user._id })
            } else {
                await axios.put('/users/' + user._id + '/favorite', { userId: currentUser._id })
                dispatch({ type: 'FAVORITE', payload: user._id })
            }
        } catch (error) {
            console.log(error)
        }
        setFavored(!favored)
    }

    // not redenring followed
    useEffect(() => {
        setFavored(currentUser.favorites.includes(user?._id))
        setFollowed(currentUser.followings.includes(user?.id))
    }, [user, currentUser])

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
                <div className="rightbar-followage-container">
                    {user.username !== currentUser.username && (
                        <button className="rightbar-follow-button" onClick={handleFollow}>
                            {followed ? 'Unfollow' : 'Follow'}
                            {followed ? <Remove /> : <Add />}
                        </button>
                    )}
                    {user.username !== currentUser.username && (
                        <button className="rightbar-favorite-button" onClick={handleFavorite}>
                            {favored ? 'Remove' : 'Favorite'}
                            {favored ? <Remove /> : <Star />}
                        </button>
                    )}
                </div>
                <div className="rightbar-heading-container">
                    <h4 className='rightbar-title'>User information</h4>
                    {user.username === currentUser.username && (
                        <button className="rightbar-edit-button" onClick={() => setIsEditing(true)}>
                            <Edit />
                        </button>
                    )}
                </div>
                {
                    isEditing ?
                        <InfoEdit user={user} setIsEditing={setIsEditing} isEditing={isEditing} /> : <DisplayInfo user={user} />
                }
                <h4 className="rightbar-followings-title">Followings</h4>
                <section className="rightbar-followings">
                    {friends.map((friend) => (
                        <Link to={'/profile/' + friend.username} style={{ textDecoration: "none" }} key={friend._id}>
                            <Followings friend={friend} />
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
