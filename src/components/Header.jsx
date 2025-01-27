import "/src/styles/Header.css"
import React, {useEffect,useState} from "react"
import { useNavigate } from "react-router-dom";

export default function Header(){
const navigate = useNavigate()

const gameShopClick = () => {
    navigate(`/`)
}

const profileClick = () => {
    navigate(`/profile`)
}

const cartClick = () => {
    navigate(`/cart`)
}

    return (
        <header>
            <div className="header">
                <div className="left">
                    <div className="gameshop"
                    onClick={()=>gameShopClick()}
                        style={{cursor:"pointer"}}>
                        GAMESHOP
                        <img src="/src/assets/gamepad.png" alt="gameshop-logo"/>
                    </div>
                    <div className="store">STORE</div>
                    <div className="community">COMMUNITY</div>
                    <div className="help">HELP</div>
                    <div className="about-us">ABOUT US</div>
                </div>
                <div className="right">
                    <div className="cart"
                        onClick={()=>cartClick()}
                        style={{cursor:"pointer"}}>
                        <img src="/src/assets/cart.png" alt="cart-ico"/>
                    </div>
                    <div className="profile"
                    onClick={()=>profileClick()}
                        style={{cursor:"pointer"}}>
                        <img src="/src/assets/profile.png" alt="profile-ico"/>
                    </div>
                </div>
            </div>
        </header>
    )
}