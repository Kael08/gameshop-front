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
        const id = localStorage.getItem("userId")
        if(!id) {
            navigate(`/auth`)
        } else {
            setUserId(id)
        }
    }, [navigate])

    const signOutClick = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <div className="page-container">
            <Header/>
            <div className="app">
                <h1>Профиль</h1>
                <p style={{color:"black"}}>Ваш ID: {userId}</p>
                <button style = {{color:"red"}} 
                    onClick={()=>signOutClick()}>
                        Sign Out
                </button>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile