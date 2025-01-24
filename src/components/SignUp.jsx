import React, {useEffect,useState} from "react"
import { useNavigate } from "react-router-dom"
import '/src/styles/App.css'
import '/src/styles/SignUp.css'

function SignUp(){
    const navigate = useNavigate()
    const [login,setLogin] = useState("")
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")
    const [errorMessage,setErrorMessage]=useState("")

    const authClick = () => {
        navigate('/auth')
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        if(!login.trim()||!password.trim()||!username.trim()){
            setErrorMessage("All fields must be filled out!")
            return
        }

        setErrorMessage("")

        // Отправка запроса
        try {
            const response = await fetch("http://localhost:3000/sign-up", {
                method:"POST",
                headers:{ "Content-Type": "application/json"},
                body:JSON.stringify({login,password,username})
            })

            if(!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || "SignUp failed")
            }

            const data = await response.json()

            localStorage.setItem("userId",data.userInfoId)
            navigate(`/profile`)
        } catch(error){
            console.error("Error:",error.message)
            setErrorMessage(
                error.message || "SignUp failed. Please try again."
            )
        }
    }

    return (
        <div className="page-container">
            <main className="app">
                <div className="signUp-container">
                    <form className="signUp" onSubmit={handleSubmit}>   
                        <p className="signUp-title">Sign Up</p>
                        {errorMessage && (
                            <p style={{color: "red",fontSize:"16px"}}>
                                {errorMessage}
                            </p>
                        )}
                        <p className="signUp-label">Login</p>
                        <input type="text" id="login" name="login" placeholder="input login..." minLength="1" maxLength="100" required value={login} onChange={(e) => setLogin(e.target.value)} /*Обновление состояния login*/ />
                        <p className="signUp-label">Password</p>
                        <input type="password" id="Password" name="Password" placeholder="input password..." minLength="1" maxLength="100" required value={password} onChange={(e) => setPassword(e.target.value)} /*Обновление состояния password*//>
                        <p className="signUp-label">Username</p>
                        <input type="text" id="username" name="username" placeholder="input username..." minLength="1" maxLength="100" required value={username} onChange={(e) => setUsername(e.target.value)} /*Обновление состояния username*/ />
                        <button type="submit">Submit</button>
                        <p className="auth-label"
                        onClick={()=>authClick()}
                            style={{cursor:"pointer"}}>
                            do you already have an account? Authorization</p>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default SignUp