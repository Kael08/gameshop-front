import React, {useEffect,useState} from "react"
import {useNavigate}from "react-router-dom"
import '/src/styles/Profile.css'
import '/src/styles/App.css'
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'


function Profile() {
    const navigate = useNavigate()
    const [userId,setUserId] = useState(null)

    useEffect(()=>{
        localStorage.clear()
        const id = localStorage.getItem("userId")
        if(!id) {
            navigate(`/auth`)
        } else {
            setUserId(id)
        }
    }, [navigate])

    return (
        <div className="page-container">
            <Header/>
            <div className="app">
                <h1>Профиль</h1>
                <p>Ваш ID: {userId}</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile