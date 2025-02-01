import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import '/src/styles/App.css'
import '/src/styles/Cart.css'
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'

function Cart() {
    const [gameList,setGameList] = useState([])
    const navigate = useNavigate()
    

    useEffect(()=>{
        if(!localStorage.getItem("userId"))
            navigate(`/auth`)
        //console.log("userId:",localStorage.getItem("userId")==="")
        console.log(localStorage.getItem("userId"))

        const storedGameList = localStorage.getItem("gameList");
        if (storedGameList) {
            try {
                setGameList(JSON.parse(storedGameList) || []);
            } catch (error) {
                console.error("Ошибка парсинга gameList:", error);
                setGameList([]);
            }
        }
    },[])

    const deleteClick = (id) =>{
        let parsedGameList = JSON.parse(localStorage.getItem("gameList"))

        parsedGameList = parsedGameList.filter(item => item.id!==id)

        localStorage.setItem("gameList",JSON.stringify(parsedGameList))
        setGameList(parsedGameList)
    }

    const buyClick = async() => {
        try {
            const userId = localStorage.getItem("userId")
            const response = await fetch(`http://localhost:3000/user-games/${userId}`)
            console.log(response)
        } catch (error){

        }
    }

    return (
        <div className="page-container">
            <Header/>
            <main className="app">
                <div className="cart-container">
                    <p className="_p_game_list">Game list</p>
                </div>
                {gameList.length>0?(
                    <>
                        {gameList.map((product) => (
                            <div className="product" key={product.id}>  
                                <p className="_p_product_id">{product.id}</p> 
                                <p className="_p_product_name">{product.name}</p> 
                                <p className="_p_product_price">${product.price}</p> 
                                <button onClick={() => deleteClick(product.id)}>
                                    Delete
                                </button>
                            </div>
                        ))}
                    </>
                ):(
                    <p style={{ color: "purple" }}>
                        Список пуст
                    </p>
                )}
                <button className="buy-button"
                onClick={()=>buyClick()}>
                    BUY
                </button>
            </main>
            <Footer/>
        </div>
    )
}

export default Cart