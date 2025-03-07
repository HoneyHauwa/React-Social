import React from 'react'
import "./closeFriend.css"

export default function CloseFriend(Users) {
  return (
    <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={Users.profilePicture} alt="" />
            <span className="sidebarFriendsName">{Users.username}</span>
    </li>
  )
}
