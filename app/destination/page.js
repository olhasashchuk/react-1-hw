"use client";

import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import { AddWishlistItem } from '@/components/destination/AddWishlistItem';
import planetsData from '@/data/planetsData';
import { PlanetCard } from '@/components/destination/PlanetCard';
import { PlanetWishlistItem } from '@/components/destination/PlanetWishlistItem';

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);
  
  let isPlanetSelected = false;
  let numberOfPlanets = 0;
  const onAddOrRemovePlanet = (name, index) => {
    onAddPlanet((prevAddedPlanet) => {
      if (prevAddedPlanet.includes(name)) {
        return prevAddedPlanet.filter(planet => planet !== name)
      } else {
        return [...prevAddedPlanet, name]
      } 
    })
   
    console.log(`You seleceted the following planet: ${name}, with the index of ${index}`);
  }

  numberOfPlanets = selectedPlanets.length;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          <p>{numberOfPlanets === 0 ? "No planets in wishlist" : `You have ${numberOfPlanets} in your wishlist`}</p>
          <b>List coming soon after lesson 3!</b>
          
          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planetsData.map((card, index) => (
               <PlanetCard 
                  key={`ourPlanetItem-${index}`} 
                  name={card.name} 
                  thumbnail={card.thumbnail} 
                  description={card.description}
                  isPlanetSelected={selectedPlanets.includes(card.name)}
                  onAddOrRemovePlanet={() => onAddOrRemovePlanet(card.name, index)}
               />
            ))}
        </section>
      </main>
    </div>
  );
}

export default Destinations;
