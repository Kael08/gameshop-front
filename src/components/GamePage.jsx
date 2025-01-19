import Header from "/src/components/Header.jsx"
import Footer from "/src/components/Footer.jsx"
import "/src/styles/App.css"
import "/src/styles/GamePage.module.css"
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

    return (
      <div className={"pageContainer"}>
        <Header />
        <div className={"app"}>
          <div className={"container"}>
            <div className={"imgContainer"}>
              <img
                key={game.game_img}
                src={`data:image/jpeg;base64,${game.game_img}`}
                alt={game.name}
              />
            </div>
            <div className={"gameInfo"}>
              <p className={"gameName"}>{game.name}</p>
              <p className={"gameDeveloper"}>Разработчик: {game.developer}</p>
              <p className={"gameGenres"}>Жанры: {game.genres.join(", ")}</p>
              <p className={"gameDescription"}>{game.description}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }