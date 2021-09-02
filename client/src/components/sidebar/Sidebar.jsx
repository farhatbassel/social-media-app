import './sidebar.scss'
import { Bookmark, CalendarToday, Group, HelpOutline, Message, PlayCircleOutline, RssFeed, School, Work } from "@material-ui/icons"
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <RssFeed className='sidebar-icon' />
                        <span className="sidebar-list-item-text">Feed</span>
                    </li>
                    <li className="sidebar-list-item">
                        <Message className='sidebar-icon' />
                        <span className="sidebar-list-item-text">Chats</span>
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
                <ul className="sidebar-friend-list">
                    {Users.map((user) => (<CloseFriend key={user.id} user={user} />))}
                </ul>
            </div>
        </div>
    )
}
