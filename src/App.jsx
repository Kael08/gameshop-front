import React, { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from "react";

function App() {
  const [games, setGames] = useState([])

  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:3000/games");
      const data = await response.json();
      console.log("Полученные данные:", data); // Логирование данных
      setGames(data);
    } catch (error) {
      console.error("Ошибка при загрузке данных: ", error);
    }
  };
  

  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <div className="app">
      <h1>Список игр</h1>
      <div className="card-container">
        {games.map((game) => (
          <div key={game.id} className="card">
            <img
              src={`data:image/jpeg;base64,${game.game_img}`}
              alt={game.name}
            />
            <p class="name">{game.name}</p>
            <p class="price">${game.price}</p>
            <p class="genres">{game.genres.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
