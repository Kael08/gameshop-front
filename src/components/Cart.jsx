import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import '/src/styles/App.css'
import '/src/styles/Cart.css'
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'

function Cart() {
    const [gameList,setGameList] = useState(null)

    useEffect(()=>{
        const storedGameList = localStorage.getItem("gameList")

        if(storedGameList)
            setGameList(JSON.parse(storedGameList))
    },[])
    

    return (
        <div className="page-container">
            <Header/>
            <main className="app">
                <div className="cart-container">
                    <p className="_p_game_list">Game list</p>
                </div>
                    {gameList?(
                        <>
                            {gameList.map((product)=>(
                                <div className="product">
                                    <p className="_p_product_id">{product.id}</p> 
                                    <p className="_p_product_name">{product.name}</p> 
                                    <p className="_p_product_price">${product.price}</p> 
                                </div>
                               
                            ))}
                        </>
                    ):(
                        <p style={{ color: "purple" }}>
                            Список пуст
                        </p>
                    )}
            </main>
            <Footer/>
        </div>
    )
}

export default Cart