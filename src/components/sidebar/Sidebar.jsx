import React from 'react'
import "./sidebar.css"
import {RssFeed,Chat, VideoLibrary, Group, Bookmark, HelpOutline, Work, Event, Lightbulb } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcons'/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcons'/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideoLibrary className='sidebarIcons'/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcons'/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcons'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcons'/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Work className='sidebarIcons'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcons'/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <Lightbulb className='sidebarIcons'/>
            <span className="sidebarListItemText">Cources</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show more</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/pic1.jpg" alt="" />
            <span className="sidebarFriendsName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
