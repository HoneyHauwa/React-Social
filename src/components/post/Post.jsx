import React from 'react'
import "./post.css"
import {MoreVert} from "@mui/icons-material";
import {Users} from "../../dummyData";

export default function Post({post}) {
  
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src="/assets/pic7.jpg" alt="" />
                <span className="postUsername">
                  {Users.filter((u) => u.id === post.userId)[0].username}
                </span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className='postImg' src={post.photo} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
            <img className='likeIcon' src="/assets/likes.png" alt=""  />
            <img className='likeIcon' src="/assets/heart3.png" alt="" />
            <span className="postlikeCounter">{post.like} people lik it </span>
                
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
