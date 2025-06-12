import React, { useState, useEffect } from 'react';
import '../styles/menu.css';

import foodMenuPage1 from '../assets/food-menu/page1.jpeg'
import foodMenuPage2 from '../assets/food-menu/page2.jpeg'
import foodMenuPage3 from '../assets/food-menu/page3.jpeg'
import foodMenuPage4 from '../assets/food-menu/page4.jpeg'
import foodMenuPage5 from '../assets/food-menu/page5.jpeg'
import foodMenuPage6 from '../assets/food-menu/page6.jpeg'
import foodMenuPage7 from '../assets/food-menu/page7.jpeg'
import foodMenuPage8 from '../assets/food-menu/page8.jpeg'
import foodMenuPage9 from '../assets/food-menu/page9.jpeg'
import foodMenuPage10 from '../assets/food-menu/page10.jpeg'

import drinkMenuPage1 from '../assets/drinks-menu/page1.jpg'
import drinkMenuPage2 from '../assets/drinks-menu/page2.jpg'
import drinkMenuPage3 from '../assets/drinks-menu/page3.jpg'
import drinkMenuPage4 from '../assets/drinks-menu/page4.jpg'
import drinkMenuPage5 from '../assets/drinks-menu/page5.jpg'
import drinkMenuPage6 from '../assets/drinks-menu/page6.jpg'
import drinkMenuPage7 from '../assets/drinks-menu/page7.jpg'
import drinkMenuPage8 from '../assets/drinks-menu/page8.jpg'
import drinkMenuPage9 from '../assets/drinks-menu/page9.jpg'
import drinkMenuPage10 from '../assets/drinks-menu/page10.jpg'
import drinkMenuPage11 from '../assets/drinks-menu/page11.jpg'
import drinkMenuPage12 from '../assets/drinks-menu/page12.jpg'
import drinkMenuPage13 from '../assets/drinks-menu/page13.jpg'
import drinkMenuPage14 from '../assets/drinks-menu/page14.jpg'
import drinkMenuPage15 from '../assets/drinks-menu/page15.jpg'
import drinkMenuPage16 from '../assets/drinks-menu/page16.jpg'
import drinkMenuPage17 from '../../src/assets/drinks-menu/page17.jpg'
import drinkMenuPage18 from '../assets/drinks-menu/page18.jpg'

console.log("Menu: foodMenuPage1", foodMenuPage1)
console.log("Menu: drinkMenuPage1", drinkMenuPage1)

const Menu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const totalPages = 10; // We have 10 menu images
  const foodMenuImages = [
    foodMenuPage1, foodMenuPage2, foodMenuPage3, foodMenuPage4, foodMenuPage5,
    foodMenuPage6, foodMenuPage7, foodMenuPage8, foodMenuPage9, foodMenuPage10
  ]

  // Drinks carousel state
  const [currentDrinkPage, setCurrentDrinkPage] = useState(1);
  const [isDrinksLoading, setIsDrinksLoading] = useState(true);
  const [drinksError, setDrinksError] = useState(null);
  const totalDrinksPages = 18;
  const drinkMenuImages = [
    drinkMenuPage1, drinkMenuPage2, drinkMenuPage3, drinkMenuPage4, drinkMenuPage5,
    drinkMenuPage6, drinkMenuPage7, drinkMenuPage8, drinkMenuPage9, drinkMenuPage10,
    drinkMenuPage11, drinkMenuPage12, drinkMenuPage13, drinkMenuPage14, drinkMenuPage15,
    drinkMenuPage16, drinkMenuPage17, drinkMenuPage18
  ]

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        setIsLoading(true);
        const imagePromises = foodMenuImages.map(imgSrc => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imgSrc;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading menu images:', err);
        setError('Unable to load the menu. Please try again.');
        setIsLoading(false);
      }
    };
    preloadImages();
  }, []);

  // Preload drinks images
  useEffect(() => {
    const preloadDrinksImages = async () => {
      try {
        setIsDrinksLoading(true);
        const imagePromises = drinkMenuImages.map(imgSrc => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imgSrc;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        await Promise.all(imagePromises);
        setIsDrinksLoading(false);
      } catch (err) {
        console.error('Error loading drinks menu images:', err);
        setDrinksError('Unable to load the drinks menu. Please try again.');
        setIsDrinksLoading(false);
      }
    };
    preloadDrinksImages();
  }, []);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevDrinkPage = () => {
    if (currentDrinkPage > 1) {
      setCurrentDrinkPage(prev => prev - 1);
    }
  };

  const handleNextDrinkPage = () => {
    if (currentDrinkPage < totalDrinksPages) {
      setCurrentDrinkPage(prev => prev + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') handlePrevPage();
      if (e.key === 'ArrowRight') handleNextPage();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  // Keyboard navigation for drinks carousel
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') handlePrevDrinkPage();
      if (e.key === 'ArrowRight') handleNextDrinkPage();
    };
    // Uncomment below if you want keyboard navigation for both carousels at once
    // window.addEventListener('keydown', handleKeyPress);
    // return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentDrinkPage]);

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="container mx-auto px-4">
        <h1 className="pt-12 text-4xl md:text-6xl font-bold text-white mb-8 text-center">
          Our Menu
        </h1>
        <div className="relative max-w-5xl mx-auto flex flex-col items-center">
          {error && (
            <div className="text-red-500 text-center mb-4 p-4 bg-red-100 rounded-lg">
              {error}
              <button 
                onClick={() => window.location.reload()}
                className="ml-4 underline hover:no-underline"
              >
                Retry
              </button>
            </div>
          )}
          <div className="carousel-container w-full max-w-[800px] max-h-[800px] aspect-square mx-auto">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`carousel-arrow left ${currentPage === 1 ? 'disabled' : ''}`}
              aria-label="Previous page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="carousel-image-wrapper w-full h-full max-w-[800px] max-h-[800px] aspect-square mx-auto">
              {isLoading ? (
                <div className="loading-overlay">
                  <div className="spinner"></div>
                  <p className="text-white mt-4">Loading menu...</p>
                </div>
              ) : (
                <img
                  src={foodMenuImages[currentPage - 1]}
                  alt={`Menu Page ${currentPage}`}
                  className="carousel-image w-full h-full max-w-[800px] max-h-[800px] aspect-square object-cover mx-auto"
                  loading="eager"
                />
              )}
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`carousel-arrow right ${currentPage === totalPages ? 'disabled' : ''}`}
              aria-label="Next page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Dot navigation below the image */}
          <div className="dot-nav">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`dot${currentPage === i + 1 ? ' active' : ''}`}
                onClick={() => setCurrentPage(i + 1)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Drinks Menu Carousel */}
        <div className="relative max-w-5xl mx-auto flex flex-col items-center mt-20">
          <h2 className="pt-12 text-3xl md:text-5xl font-bold text-white mb-8 text-center">Drinks Menu</h2>
          {drinksError && (
            <div className="text-red-500 text-center mb-4 p-4 bg-red-100 rounded-lg">
              {drinksError}
              <button 
                onClick={() => window.location.reload()}
                className="ml-4 underline hover:no-underline"
              >
                Retry
              </button>
            </div>
          )}
          <div className="drinks-carousel-container">
            <button
              onClick={handlePrevDrinkPage}
              disabled={currentDrinkPage === 1}
              className={`carousel-arrow left ${currentDrinkPage === 1 ? 'disabled' : ''}`}
              aria-label="Previous drink page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="drinks-carousel-image-wrapper">
              {isDrinksLoading ? (
                <div className="loading-overlay">
                  <div className="spinner"></div>
                  <p className="text-white mt-4">Loading drinks menu...</p>
                </div>
              ) : (
                <img
                  src={drinkMenuImages[currentDrinkPage - 1]}
                  alt={`Drinks Menu Page ${currentDrinkPage}`}
                  className="drinks-carousel-image"
                  loading="eager"
                />
              )}
            </div>
            <button
              onClick={handleNextDrinkPage}
              disabled={currentDrinkPage === totalDrinksPages}
              className={`carousel-arrow right ${currentDrinkPage === totalDrinksPages ? 'disabled' : ''}`}
              aria-label="Next drink page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Dot navigation below the drinks image */}
          <div className="dot-nav">
            {Array.from({ length: totalDrinksPages }, (_, i) => (
              <button
                key={i + 1}
                className={`dot${currentDrinkPage === i + 1 ? ' active' : ''}`}
                onClick={() => setCurrentDrinkPage(i + 1)}
                aria-label={`Go to drinks page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;