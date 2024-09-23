"use client";

import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import { AddWishlistItem } from '@/components/destination/AddWishlistItem';
import planetsData from '@/data/planetsData';
import { PlanetCard } from '@/components/destination/PlanetCard';
import { PlanetWishlistItem } from '@/components/destination/PlanetWishlistItem';

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
   
  const handleAddWishlistItem = ({ name, thumbnail }) => {
    const isSelectedCurrently = selectedPlanets.some(planet => planet.name === name);
    if (isSelectedCurrently) {
      window.alert('This Planet was added in the wishlist')
    } else {
      setSelectedPlanets([...selectedPlanets, { name, thumbnail }])
      console.log(selectedPlanets)
    }
  };

  const handleRemoveFromWishlist = (name) => {
    setSelectedPlanets(selectedPlanets.filter((planet) => planet.name !== name));
  };
  
  // const handleAddOrRemovePlanet = (id) => {
  //   const isSelectedCurrently = selectedPlanets.includes(id)
  //   if (isSelectedCurrently) {
  //     const newList = selectedPlanets.filter(planet => planet !== id);
  //     setSelectedPlanets(newList);
  //   } else {
  //     setSelectedPlanets([...selectedPlanets, id])
  //   }
  // }

  let numberOfPlanets = selectedPlanets.length;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          <p>{numberOfPlanets === 0 ? "No planets in wishlist" : `You have ${numberOfPlanets} in your wishlist`}</p>
          <AddWishlistItem onAddWishlistItem={handleAddWishlistItem}/>        
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
          {selectedPlanets.map((planet, index)=>{
            return(
            <PlanetWishlistItem 
              key={`wishListItem-${index}`}   
              name={planet.name}
              onRemove={() => handleRemoveFromWishlist(planet.name)}
              thumbnail={planet.thumbnail}
            />)
          })            
          }

          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planetsData.map((card, index) => (
              <PlanetCard 
                key={`ourPlanetItem-${index}`}
                id={index} 
                name={card.name} 
                thumbnail={card.thumbnail} 
                description={card.description}
                isPlanetSelected={selectedPlanets.some(planet => planet.name === card.name)}
                onAddPlanetToWishlist={() => handleAddWishlistItem({ name: card.name, thumbnail: card.thumbnail })}
                onRemovePlanetToWishlist={() => handleRemoveFromWishlist(card.name)}
              />
               
            ))}
        </section>
      </main>
    </div>
  );
}

export default Destinations;
