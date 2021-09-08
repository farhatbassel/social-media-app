import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import './profile.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})
    const username = useParams().username

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`)
            setUser(res.data)
        }
        fetchUser()
    }, [username])

    return (
        <>
            <Navbar />
            <div className="profile">
                <Sidebar />
                <div className="profile-right">
                    <section className="profile-right-top">
                        <div className="profile-cover">
                            <img src={user.coverPicture ? PF + user.coverPicture : PF + "person/noCover.png"} alt="profile-cover" className='profile-cover-image' />
                            <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="profile-user" className='profile-user-image' />
                        </div>
                        <div className='profile-info'>
                            <h4 className="profile-info-name">{user.username}</h4>
                            <span className="profile-info-desc">{user.desc}</span>
                        </div>
                    </section>
                    <section className="profile-right-bottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </section>
                </div>
            </div>
        </>
    )
}
