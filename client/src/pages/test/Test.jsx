import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Trying to work out the editing functionality 
const Test = () => {
    const user = {
        "_id": "6135422bc78f75d48cd8c2c1",
        "username": "Josh",
        "email": "josh@gmail.com",
        "password": "$2b$10$yO0Nx4QRdmfv54EIjcJ8w.DxzXAfa/3jHRsEAX16PwN0Sz2dDHRnm",
        "profilePicture": "",
        "coverPicture": "",
        "followers": [],
        "followings": [],
        "isAdmin": false,
        "favorites": [],
        "createdAt": "2021-09-05T22:18:19.140Z",
        "updatedAt": "2021-09-05T22:19:02.457Z",
        "__v": 0,
        "desc": "Hello friends!",
        "city": 'test',
        "from": '',
        "relationship": ''
    }

    const [isEditting, setIsEditting] = useState(false)
    const [userInfo, setUserInfo] = useState(user)

    const handleEdit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`/users/${user._id}`, { userId: userInfo._id, city: userInfo.city, from: userInfo.from, relationship: userInfo.relationship })
        } catch (error) {
            console.log(error)
        }
        setIsEditting(false)
    }

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
    }, [userInfo])

    return (
        <form onSubmit={handleEdit}>
            <label htmlFor="city">
                <span>City:</span>
                <input type="text" id='city' disabled={isEditting ? 'disabled' : null} value={userInfo.city || ''} placeholder={userInfo.city} onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })} />
            </label>
            <label htmlFor="from" disabled={isEditting ? 'disabled' : null}>
                <span>From:</span>
                <input type="text" id='from' disabled={isEditting ? 'disabled' : null} value={userInfo.from || ''} placeholder={userInfo.from} onChange={(e) => setUserInfo({ ...userInfo, frOm: e.target.value })} />
            </label>
            <label for="relationship" disabled={isEditting ? 'disabled' : null}>
                <span>Relationship:</span>
                <input type='text' id='relationship' value={user.relationship === 1 ? 'Single' : user.relationship === 2 ? 'Married' : '-'} disabled={'disabled'} />
                <input type="radio" id='relationship' name='relationship' value={1} onChange={(e) => setUserInfo({ ...userInfo, relationship: e.target.value })} />
                <span>Single</span>
                <input type="radio" id='relationship' name='relationship' value={2} onChange={(e) => setUserInfo({ ...userInfo, relationship: e.target.value })} />
                <span>Married</span>
                <input type="radio" id='relationship' name='relationship' value={3} onChange={(e) => setUserInfo({ ...userInfo, relationship: e.target.value })} />
                <span>-</span>
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Test