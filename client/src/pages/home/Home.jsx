import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import './home.scss'
import React from 'react'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="content-wrapper">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}
