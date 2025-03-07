import React from 'react';
import "./rightbar.css";
import { Users } from "../../dummyData"; 
import Online from "../online/Online";

 

export default function Rightbar({profile}) {

  const HomeRightbar = () =>{
    return(
      <> 
      <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Sakina Jane</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbarAd' src="/assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      
      </>
    );
  };

  const profileRightbar = () =>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Edo state</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/pic2.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Zainab Akunne</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/pic4.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Zainab Akunne</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/pic5.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Zainab Akunne</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/pic6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Zainab Akunne</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/pic7.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Zainab Akunne</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/pic8.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Zainab Akunne</span>
        </div>
      </div>
      </>
     )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profileRightbar()}
      </div>
    </div>
    
  );
}
