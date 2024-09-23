"use client";

import { useState } from 'react';
import styles from './destination.module.css';
import { Button } from '../ui/Button';
import planetsData from '@/data/planetsData';

export const AddWishlistItem = ({
  onAddWishlistItem,
}) => {
  const [thumbnail, setThumbnailChange] = useState('');
  const [wishlistInputValue, setWishlistInputValue] = useState('');

  const onWishlistInputValue = (event) => {
    setWishlistInputValue(event.target.value)
  } 
  
  const onThumbnailChange = (event) => {
    setThumbnailChange(event.target.value)
  }

  const onAddItemPressed = () => {
    const inputValueUpperCase = wishlistInputValue.trim().toUpperCase();
    const selectedPlanet = planetsData.find(
      (planet) =>
        thumbnail.toUpperCase().includes(planet.name.toUpperCase()) &&
        planet.name.toUpperCase() === inputValueUpperCase
    );
  
    if (selectedPlanet) {
      onAddWishlistItem({ name: wishlistInputValue, thumbnail });
      setWishlistInputValue('');
    } else {
      window.alert('Planet name does not match the selected image!');
    }
  }


  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input id="customWishlist" type="text" value={wishlistInputValue} onChange={onWishlistInputValue}/>
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select 
        className ="textCapital"
        id="customWishlistThumbnail"
        value={thumbnail}
        onChange={onThumbnailChange}
      >
        {planetsData.map((planet, index) => (
          <option className ="textCapital" key={`ourPlanetOption-${index}`} value={planet.thumbnail}>
            {planet.name}
          </option>
        ))}
      </select>
      <Button
        onClick={onAddItemPressed}
        name = 'add custom'
      />
    </div>
  );
};
