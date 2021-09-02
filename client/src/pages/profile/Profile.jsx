import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import './profile.scss'
import coverImage from '../../assets/post/1.jpeg'
import image from '../../assets/person/3.jpeg'
export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="profile">
                <Sidebar />
                <div className="profile-right">
                    <section className="profile-right-top">
                        <div className="profile-cover">
                            <img src={coverImage} alt="profile-cover-image" className='profile-cover-image' />
                            <img src={image} alt="profile-user-image" className='profile-user-image' />
                        </div>
                        <div className='profile-info'>
                            <h4 className="profile-info-name">Name</h4>
                            <span className="profile-info-desc">Hello there!</span>
                        </div>
                    </section>
                    <section className="profile-right-bottom">
                        <Feed />
                        <Rightbar profile />
                    </section>
                </div>
            </div>
        </>
    )
}
