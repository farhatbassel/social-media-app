import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './infoEdit.scss'

export default function InfoEdit({ user, setIsEditing, isEditing }) {
    const [userInfo, setUserInfo] = useState(user)

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const data = await axios.get("/users/" + userInfo._id)
                setUserInfo({ ...userInfo, data })
            } catch (error) {
                console.log(error)
            }
        }
        getUserInfo()
    }, [userInfo, user])

    const handleEdit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`/users/${user._id}`, { userId: userInfo._id, city: userInfo.city, from: userInfo.from, relationship: userInfo.relationship })
        } catch (error) {
            console.log(error)
        }
        setIsEditing(false)
        return isEditing
    }

    return (
        <form onSubmit={handleEdit} className="rightbar-info">
            <label htmlFor="city" className='rightbar-info-label'>
                <span className='rightbar-info-title'>City:</span>
                <input type="text" className='rightbar-input' id='city' value={userInfo.city} name='city' placeholder={userInfo.city} onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })} />
            </label>
            <label htmlFor="from" className='rightbar-info-label'>
                <span className='rightbar-info-title'>From:</span>
                <input type="text" className='rightbar-input' id='from' value={userInfo.from} name='from' placeholder={userInfo.from} onChange={(e) => setUserInfo({ ...userInfo, from: e.target.value })} />
            </label>
            <label htmlFor="relationship" className='rightbar-info-label'>
                <span className='rightbar-info-title'>Status:</span>
                <div className="rightbar-radio">
                    <input type="radio" className='rightbar-input-radio' id='relationship' name='relationship' value={1} onChange={(e) => setUserInfo({ ...userInfo, relationship: e.target.value })} />
                    <span className='rightbar-input-span'>Single </span>
                    <input type="radio" className='rightbar-input-radio' id='relationship' name='relationship' value={2} onChange={(e) => setUserInfo({ ...userInfo, relationship: e.target.value })} />
                    <span className='rightbar-input-span'>Married </span>
                    <input type="radio" className='rightbar-input-radio' id='relationship' name='relationship' value={3} onChange={(e) => setUserInfo({ ...userInfo, relationship: e.target.value })} />
                    <span className='rightbar-input-span'>-</span>
                </div>
                <button type='submit' className='rightbar-button'>Submit</button>
            </label>
        </form>
    )
}
