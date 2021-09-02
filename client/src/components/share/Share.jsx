import "./share.scss"
import person from "../../assets/person/1.jpeg"
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

export default function Share() {
    return (
        <div className='share'>
            <div className="share-wrapper">
                <section className="share-top">
                    <img className="share-profile-image" src={person} alt="" />
                    <input placeholder="What's on your mind?" className="share-input" />
                </section>
                <hr className='share-hr' />
                <section className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PermMedia htmlColor='tomato' className='share-icon' />
                            <span className='share-option-text'>Photo or Video</span>
                        </div>
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
                    <button className="share-button">Share</button>
                </section>
            </div>
        </div>
    )
}
