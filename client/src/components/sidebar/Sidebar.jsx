import './sidebar.scss'
import { Bookmark, CalendarToday, Group, HelpOutline, Message, PlayCircleOutline, RssFeed, School, Work } from "@material-ui/icons"
import CloseFriend from '../closeFriend/CloseFriend'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'

export default function Sidebar() {

    const { user } = useContext(AuthContext)
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const favoriteList = await axios.get('/users/favorites/' + user._id)
                setFavorites(favoriteList.data)
            } catch (error) {
                console.log(error)
            }
        }
        getFavorites()
    }, [user])

    return (
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <Link to={`/`} style={{ textDecoration: "none", color: "#000", display: 'flex', alignItems: 'center' }}>
                            <RssFeed className='sidebar-icon' />
                            <span className="sidebar-list-item-text">Feed</span>
                        </Link>
                    </li>
                    <li className="sidebar-list-item">
                        <Link to={`/messenger`} style={{ textDecoration: "none", color: "#000", display: 'flex', alignItems: 'center' }}>
                            <Message className='sidebar-icon' />
                            <span className="sidebar-list-item-text">Chats</span>
                        </Link>
                    </li>
                    <li className="sidebar-list-item">
                        <PlayCircleOutline className='sidebar-icon' />
                        <span className="sidebar-list-item-text">Videos</span>
                    </li>
                    <li className="sidebar-list-item">
                        <Group className='sidebar-icon' />
                        <span className="sidebar-list-item-text">Group</span>
                    </li>
                    <li className="sidebar-list-item">
                        <Bookmark className='sidebar-icon' />
                        <span className="sidebar-list-item-text">Bookmarks</span>
                    </li>
                    <li className="sidebar-list-item">
                        <HelpOutline className='sidebar-icon' />
                        <span className="sidebar-list-item-text">Questions</span>
                    </li>
                    <li className="sidebar-list-item">
                        <Work className='sidebar-icon' />
                        <span className="sidebar-list-item-text">Jobs</span>
                    </li>
                    <li className="sidebar-list-item">
                        <CalendarToday className='sidebar-icon' />
                        <span className="sidebar-list-item-text">Events</span>
                    </li>
                    <li className="sidebar-list-item">
                        <School className='sidebar-icon' />
                        <span className="sidebar-list-item-text">Courses</span>
                    </li>
                </ul>
                <button className="sidebar-button">Show More</button>
                <hr className='sidebar-hr' />
                <h4 className='sidebar-favorites'>Favorites</h4>
                <ul className="sidebar-friend-list">
                    {favorites.map((friend) => (
                        <Link to={'/profile/' + friend.username} style={{ textDecoration: "none", color: '#000' }}>
                            <CloseFriend key={friend.id} friend={friend} />
                        </Link>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}
