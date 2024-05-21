// お気に入り
import React, { useContext } from "react";
import { DogContext } from "../Context/DogContext";
import { useNavigate } from "react-router-dom";
import "./Favorite -Images.css";

const Favorite = () => {
  let navigate = useNavigate();
  // 犬の情報が入ったstateを取得
  const { dogDataList, setDogDataList } = useContext(DogContext);

  const DetailClick = (id) => {
    navigate(`/detail/${id}`);
  };
  const eraseClick = (id) => {
    const newDogDataList = dogDataList.filter((dog) => dog.id !== id);
    setDogDataList(newDogDataList);
  };

  return (
    <div className="dogs-list">
      <h2>お気に入りの犬</h2>
      {dogDataList && dogDataList.length > 0 ? (
        dogDataList.map((dog, index) => (
          <div key={index} className="dog-item">
            <img
              src={dog.imageUrl}
              alt={`Favorite Dog ${index + 1}`}
              onClick={() => DetailClick(dog.id)}
            />
            <p>品種: {dog.breed.name}</p>
            <button onClick={() => eraseClick(dog.id)}>お気に入り解除</button>
          </div>
        ))
      ) : (
        <p>お気に入りの犬が選ばれていません。</p>
      )}
    </div>
  );
};

export default Favorite;
