import React from 'react'
import "./Favorites.scss"
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../store/FavoriteSlice'

const Favorites = () => {

  const FavCart = useSelector(state=>state.favorite)
  const dispatch = useDispatch()

  const removeFromFav = (photo) => {
    dispatch(remove(photo));
   
  };

  return (
    <div className='container'>
      {FavCart.map((photo) => (
          <div className="card">
            <img
              className="card-image"
              key={photo.id}
              src={photo.src.medium}
              alt={photo.photographer}
            />
            <button className="card-button" onClick={() => removeFromFav(photo.id)}>
              remove
            </button>
          </div>
        ))}
    </div>
  )
}

export default Favorites