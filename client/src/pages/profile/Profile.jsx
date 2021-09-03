import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import './profile.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=john`)
            setUser(res.data)
        }
        fetchUser()
    }, [])

    return (
        <>
            <Navbar />
            <div className="profile">
                <Sidebar />
                <div className="profile-right">
                    <section className="profile-right-top">
                        <div className="profile-cover">
                            <img src={`${PF}post/3.jpeg`} alt="profile-cover-image" className='profile-cover-image' />
                            <img src={`${PF}person/3.jpeg`} alt="profile-user-image" className='profile-user-image' />
                        </div>
                        <div className='profile-info'>
                            <h4 className="profile-info-name">{user.username}</h4>
                            <span className="profile-info-desc">{user.desc}</span>
                        </div>
                    </section>
                    <section className="profile-right-bottom">
                        <Feed username='john' />
                        <Rightbar user={user} />
                    </section>
                </div>
            </div>
        </>
    )
}
