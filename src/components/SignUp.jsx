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
    //<form className="signUp" onSubmit={handleSubmit}>
    return (
        <div className="page-container">
            <main className="app">
                <div className="signUp-container">
                    <form className="signUp" >
                        <p className="signUp-title">Sign Up</p>
                        {/*errorMessage && (
                            <p style={{color: "red",fontSize:"16px"}}>
                                {errorMessage}
                            </p>
                        )*/}
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