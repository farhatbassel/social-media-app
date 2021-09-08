import React from 'react'

export default function DisplayInfo({ user }) {
    return (
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
    )
}
