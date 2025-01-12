import "/src/styles/Header.css"
import React, {useEffect,useState} from "react"

export default function Header(){
    return (
        <header>
            <div className="header">
                <div className="gameshop">
                    GAMESHOP
                    <img src="/src/assets/gamepad.png" alt="gameshop-logo"/>
                </div>
                <div className="store">STORE</div>
                <div className="community">COMMUNITY</div>
                <div className="help">HELP</div>
                <div className="about-us">ABOUT US</div>
                <div className="cart">
                    <img src="/src/assets/cart.png" alt="cart-ico"/>
                </div>
                <div className="profile">
                    <img src="/src/assets/profile.png" alt="profile-ico"/>
                </div>
            </div>
        </header>
    )
}