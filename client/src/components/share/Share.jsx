import "./share.scss"
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from '@material-ui/icons'
import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"

export default function Share() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext)
    const desc = useRef()
    const [file, setFile] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (file) {
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append('file', file)
            data.append('name', fileName)
            newPost.img = fileName
            try {
                await axios.post('/upload', data)
            } catch (error) {
                console.log(error)
            }
        }

        try {
            await axios.post('/posts', newPost)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='share'>
            <div className="share-wrapper">
                <section className="share-top">
                    <Link to={`/profile/${user.username}`}>
                        <img className="share-profile-image" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" />
                    </Link>
                    <input placeholder={"What's on your mind " + user.username.replace(/^\w/, (c) => c.toUpperCase()) + "?"} className="share-input" ref={desc} />
                </section>
                <hr className='share-hr' />
                {file && (
                    <div className="share-image-container">
                        <img src={URL.createObjectURL(file)} className='share-image' alt="User Upload" />
                        <Cancel className='share-cancel-image' onClick={() => setFile(null)} />
                    </div>
                )}
                <form className="share-bottom" onSubmit={submitHandler}>
                    <div className="share-options">
                        <label htmlFor='file' className="share-option">
                            <PermMedia htmlColor='tomato' className='share-icon' />
                            <span className='share-option-text'>Photo or Video</span>
                            <input style={{ display: 'none' }} type="file" id='file' accept="png,jpeg,jpg" onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className="share-option">
                            <Label htmlColor='blue' className='share-icon' />
                            <span className='share-option-text'>Tag</span>
                        </div>
                        <div className="share-option">
                            <Room htmlColor='green' className='share-icon' />
                            <span className='share-option-text'>Location</span>
                        </div>
                        <div className="share-option">
                            <EmojiEmotions htmlColor='goldenrod' className='share-icon' />
                            <span className='share-option-text'>Feelings</span>
                        </div>
                    </div>
                    <button className="share-button" type='submit'>Share</button>
                </form>
            </div>
        </div>
    )
}
