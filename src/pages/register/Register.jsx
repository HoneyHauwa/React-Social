import React from 'react'
import "./register.css"


export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="LoginLogo">Lamasocial</h3>
                <span className="LoginDesc">Connect with friends and the world around you on Lamasocial. </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="PasswordAgain" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="LoginRegisterButton">
                        Log into Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
