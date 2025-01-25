import React, {useEffect,useState} from "react"
import {useNavigate}from "react-router-dom"
import '/src/styles/Profile.css'
import '/src/styles/App.css'
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'


function Profile() {
    const navigate = useNavigate()
    const [userId,setUserId] = useState(localStorage.getItem("userId"))
    const [user,setUser]=useState(null)
    const [avatar,setAvatar]=useState('/src/assets/noname.jpg')

    const fetchUser = async () => {
        try {
            const response = await fetch(`http://localhost:3000/users/info/${userId}`)
            const data = await response.json()
            console.log("Полученные данные:", data)

            setUser(data)
        } catch(error){
            console.error("Ошибка при загрузке данных: ", error);
        }
    }

    useEffect(()=>{
        if(!userId)
        {
            navigate(`/auth`)
        } else {
            fetchUser()
        }
    }, [userId,navigate])

    const signOutClick = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <div className="page-container">
            <Header/>
            <div className="app">
                <div className="profile-container">
                    {user ? (
                        <>
                            <div className="avatar">
                                <img 
                                    src={user.image_data ? `data:image/jpeg;base64,${user.image_data}` : avatar}
                                    alt={"Аватар"}
                                />
                                <div className="_name_bio">
                                    <p className="_p_name">{user.username}</p>
                                    <p className="_p_bio">{user.bio ? user.bio : "Добавить информацию о себе"}</p>
                                </div>
                            </div>
                            <div className="sign-out-container">
                                <button onClick={signOutClick}>
                                    Sign Out
                                </button>
                            </div>
                        </>
                    ) : (
                        <p>Загрузка данных...</p>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Profile