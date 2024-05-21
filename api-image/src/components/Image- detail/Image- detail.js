import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DogContext } from "../Context/DogContext";

const Detail = () => {
  const { id } = useParams();
  const { API_KEY, dogDataList, setDogDataList } = useContext(DogContext);
  const [dogDetails, setDogDetails] = useState(null);

  useEffect(() => {
    const fetchDogDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.thedogapi.com/v1/images/${id}`,
          {
            headers: {
              "x-api-key": API_KEY,
            },
          }
        );
        console.log(response.data);
        setDogDetails(response.data);
      } catch (error) {
        console.error("Error fetching dog details:", error);
      }
    };

    fetchDogDetails();
  }, [id, API_KEY]);

  const addFavorite = () => {
    if (dogDetails) {
      const favoriteDog = {
        id: dogDetails.id,
        imageUrl: dogDetails.url,
        breed: dogDetails.breeds
          ? dogDetails.breeds[0]
          : { name: "Unknown Breed" },
      };
      setDogDataList([...dogDataList, favoriteDog]);
    }
  };

  return (
    <div>
      <h2>犬の詳細</h2>
      <div className="dogs-list">
        {dogDetails ? (
          <div className="dog-item">
            <img src={dogDetails.url} alt={`Dog ${dogDetails.id}`} />
            {dogDetails.breeds && dogDetails.breeds.length > 0 && (
              <>
                <p>品種: {dogDetails.breeds[0].name}</p>
                <p>生息地: {dogDetails.breeds[0].origin}</p>
                <p>寿命: {dogDetails.breeds[0].life_span}</p>
                <p>気質: {dogDetails.breeds[0].temperament}</p>
                <p>体重: {dogDetails.breeds[0].weight.metric} kg</p>
                <p>身長: {dogDetails.breeds[0].height.metric} cm</p>
              </>
            )}
          </div>
        ) : (
          <p>詳細情報が取得できません。</p>
        )}
      </div>
      <button onClick={addFavorite}>お気に入りボタン</button>
    </div>
  );
};

export default Detail;
