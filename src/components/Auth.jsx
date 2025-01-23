import React, {useEffect,useState} from "react"
import { useNavigate } from "react-router-dom"
import '/src/styles/App.css'
import '/src/styles/Auth.css'

function Auth(){
    const navigate = useNavigate()
    const [login,setLogin]=useState("")
    const [password,setPassword]=useState("")
    const [errorMessage,setErrorMessage]=useState("")

    const signUpClick = () => {
        navigate(`/signUp`)
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        // Проверка заполненности полей
        if(!login.trim() || !password.trim()) {
            setErrorMessage("Both fields must be filled out!")
            return
        }

        setErrorMessage("") // Очищаем сообщение об ошибке, если все ок

        // Отправка запроса
        try {
            const response = await fetch("http://localhost:3000/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ login, password }),
            });

            // Проверяем статус ответа
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Authentication failed");
            }

            const data = await response.json();
            console.log("Success:", data); 

            // Сохраняем userId в localStorage
            localStorage.setItem("userId", data[0].user_info_id);
            navigate(`/profile`);
        } catch (error) {
            console.error("Error:", error.message);
            setErrorMessage(
                error.message || "Authentication failed. Please try again."
            );
        }
    }

    return (
        <div className="page-container">
            <main className="app">
                <div className="auth-container">
                    <form className="auth" onSubmit={handleSubmit}>
                        <p className="auth-title">Authorization</p>
                        {errorMessage && (
                            <p style={{color: "red",fontSize:"16px"}}>
                                {errorMessage}
                            </p>
                        )}
                        <p className="auth-label">Login</p>
                        <input type="text" id="login" name="login" placeholder="input login..." minLength="1" maxLength="100" required value={login} onChange={(e) => setLogin(e.target.value)} /*Обновление состояния login*/ />
                        <p className="auth-label">Password</p>
                        <input type="password" id="Password" name="Password" placeholder="input password..." minLength="1" maxLength="100" required value={password} onChange={(e) => setPassword(e.target.value)} /*Обновление состояния password*//>
                        <button type="submit">Submit</button>
                        <p className="signUp-label"
                        onClick={()=>signUpClick()}
                            style={{cursor:"pointer"}}>
                            No account? Sign Up</p>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Auth