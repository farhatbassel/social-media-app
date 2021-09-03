import './rightbar.scss'
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const HomeRightbar = () => {
        return (
            <>
                <section className='birthday-container'>
                    <img src={`${PF}gift.png`} className='birthday-image' alt="" />
                    <span className="birthday-text"> <b>Pola Foster</b> and <b>3 other friends</b> have their birthday today.</span>
                </section>
                <img src={`${PF}ad.png`} className='rightbar-ad' alt="" />
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
                    <div className="rightbar-following">
                        <img src={`${PF}person/1.jpeg`} alt="" className="rightbar-following-image" />
                        <span className="rightbar-following-name">John Doe</span>
                    </div>
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
