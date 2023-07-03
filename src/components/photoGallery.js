import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store/PhotoSlice";
import "./photoGallery.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { add, remove } from "../store/FavoriteSlice";

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state.photos);

  const FavCart = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const handleToggleFavorite = (photo) => {
    if (isFavorite(photo)) {
      dispatch(remove(photo.id));
    } else {
      dispatch(add(photo));
    }
  };

  const isFavorite = (photo) => {
    return FavCart.some((favPhoto) => favPhoto.id === photo.id);
  };

  const renderHeartIcon = (isFavorite) => {
    return isFavorite ? (
      <AiFillHeart size={30} />
    ) : (
      <AiOutlineHeart size={30} />
    );
  };

  return (
    <div className="main-container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="container">
        {photos.map((photo) => (
          <div className="card">
            <img
              className="card-image"
              key={photo.id}
              src={photo.src.portrait}
              alt={photo.photographer}
            />
            <button
              className="card-button"
              onClick={() => handleToggleFavorite(photo)}
              onDoubleClick={() => handleToggleFavorite(photo)}
            >
              {renderHeartIcon(isFavorite(photo))}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
