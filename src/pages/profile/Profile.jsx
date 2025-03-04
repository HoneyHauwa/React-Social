import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Profile() {
  return (
    <>
        <Topbar/>
        
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <img className='profileCoverImg' src="/assets/pic1.jpg" alt="" />
                <img className='profileUserImg' src="/assets/pic2.jpg" alt="" />
            </div>
            <div className="profileRightBottom">
            <Feed/>
            <Rightbar/>

            </div>
        
        </div>
        

        </div>

        
    </>
  )
}
