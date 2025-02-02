import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/styles/Cards.css";

export default function Cards() {
  const navigate = useNavigate()

  const handleClick=(id) => {
    navigate(`/gamePage/${id}`)
  }

  const [games, setGames] = useState([])
  const [selectedGenre, setSelectedGenre] = useState("") // Состояние для выбранного жанра

  // Функция для загрузки данных
  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:3000/games");
      const data = await response.json();
      console.log("Полученные данные:", data);
      setGames(data);
    } catch (error) {
      console.error("Ошибка при загрузке данных: ", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  // Создание списка уникальных жанров
  const genres = Array.from(
    new Set(games.flatMap((game) => game.genres))
  );

  // Фильтрация игр по выбранному жанру
  const filteredGames =
    selectedGenre === ""
      ? games
      : games.filter((game) => game.genres.includes(selectedGenre));

  return (
    <div>
      {/* Выпадающий список */}
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* Карточки игр */}
      <div className="card-container">
        {filteredGames.map((game) => (
          <div key={game.game_id} className="card" 
          onClick={() => handleClick(game.game_id)} // Теперь обработчик на уровне карточки
            style={{ cursor: "pointer" }}>
            <img
              src={`data:image/jpeg;base64,${game.game_img}`}
              alt={game.name}
            />
            <p className="name">{game.name}</p>
            <p className="price">${game.price}</p>
            <p className="genres">{game.genres.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
