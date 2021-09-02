import './rightbar.scss'
import birthday from '../../assets/gift.png'
import ad from '../../assets/ad.png'
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <section className='birthday-container'>
                    <img src={birthday} className='birthday-image' alt="" />
                    <span className="birthday-text"> <b>Pola Foster</b> and <b>3 other friends</b> have their birthday today.</span>
                </section>
                <img src={ad} className='rightbar-ad' alt="" />
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
                <h4 className='rightbar-Title'>User information</h4>
                <div className="rightbar-info">
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">City:</span>
                        <span className="rightbar-info-value">New York</span>
                    </div>
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">City:</span>
                        <span className="rightbar-info-value"></span>
                    </div>
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">City:</span>
                        <span className="rightbar-info-value"></span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className="rightbar-wrapper">
                <ProfileRightbar />
            </div>
        </div>
    )
}
