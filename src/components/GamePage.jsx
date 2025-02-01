import Header from "/src/components/Header.jsx"
import Footer from "/src/components/Footer.jsx"
import "/src/styles/GamePage.css";
import "/src/styles/App.css"
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"

export default function GamePage() {
  const [game,setGame] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    console.log("id: ", id)
  }, [id])

  const fetchGame = async () => {
    try {
        const response = await fetch(`http://localhost:3000/games/gamePage/${id}`)
        const data = await response.json()
        console.log("Полученные данные:", data)
        setGame(data)
    } catch(error) {
      console.error("Ошибка при загрузке данных: ", error)
    }
  }

  useEffect(()=> {
    fetchGame()
  }, [id])

  if(!game){
    return <div>Загрузка...</div>
  }

  const addToCart = () => {
    const storedGameList = localStorage.getItem("gameList")
    let parsedGameList = storedGameList ? JSON.parse(storedGameList) : []
  
    if (!Array.isArray(parsedGameList)) {
      parsedGameList = [] // Защита на случай, если данные в `localStorage` повреждены
    }
  
    if (!parsedGameList.find(element => element.id === game.game_id)) {
      parsedGameList.push({ id: game.game_id, name: game.name, price: game.price })
    }
  
    localStorage.setItem("gameList", JSON.stringify(parsedGameList))
  }
  

  return (
    <div className="page-container">
      <Header />
      <main className="app">
        {game?(
          <>
            <div className="gamePage-container">
              <div className="gamePage-ico">
                <img
                  src={`data:image/jpeg;base64,${game.game_img}`}
                  alt={game.name}/>
              </div>
              <div className="main-info">
                <p className="_name">{game.name}</p>
                <p className="_developer">{game.developer}</p>
                <p className="_genres">{game.genres.join(", ")}</p>
                <p className="_rating"> Rating: {game.rating}</p>
              </div>
              <div className="middle-onfo">
                <p className="_description">{game.description}</p>
              </div>
              <div className="buy-info"> 
                <p className="_price">${game.price}</p>
              </div>          
              <div className="add-to-cart-container">
                <button onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            </div>
          </>
        ): (
          <p>Загрузка данных...</p>
        )}
        
      </main>
      <Footer />
    </div>
  );
  }