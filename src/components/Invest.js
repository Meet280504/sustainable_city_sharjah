import React, { useState, useEffect, useRef } from 'react';
import { FaLocationDot } from "react-icons/fa6";

const carouselItems = [
  { id: 1, text1: '7 Mins', text2: 'Airport Road' },
  { id: 2, text1: '5 Mins', text2: 'Sheikh Mohammed bin Zayed Road' },
  { id: 3, text1: '10 Mins', text2: 'Emirates Road' },
  { id: 4, text1: '10 Mins', text2: 'Sharjah National Park' },
  // { id: 5, text1: '20 Mins', text2: 'Dubai International Airport' },
  // { id: 6, text1: '25 Mins', text2: 'Dubai Marina' },
];

const Invest = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsRef = useRef([]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  // Function to determine which items to display based on screen size
  const getVisibleItems = () => {
    const width = window.innerWidth;
    let itemsToShow;
    if (width >= 1024) { // Desktop
      itemsToShow = 3;
    } else if (width >= 768) { // Tablet
      itemsToShow = 2;
    } else { // Mobile
      itemsToShow = 1;
    }

    const start = activeIndex;
    const end = (start + itemsToShow);
    
    // Handle wrapping around the array
    if (end <= carouselItems.length) {
      return carouselItems.slice(start, end);
    } else {
      const firstPart = carouselItems.slice(start, carouselItems.length);
      const secondPart = carouselItems.slice(0, end - carouselItems.length);
      return [...firstPart, ...secondPart];
    }
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="w-full px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center font-inter text-white overflow-hidden">
      {/* Image Section */}
      <div className="w-full md:order-1 order-2 h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
        <img
          src="../Assets/location-map.png"
          alt="Location Map"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col items-center text-start md:order-2 order-1">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#997736] text-center mb-6 uppercase tracking-wide">
          LOCATION CONNECTIVITY
        </h2>
        <div className="w-full space-y-2">
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="p-2 border-2 border-[#997736] md:border-0 bg-transparent rounded-lg shadow-md hover:shadow-lg text-[#997736] transform transition-transform duration-500 ease-in-out"
            >
              <div className="flex items-center">
                <FaLocationDot className="text-[#997736] mr-2" />
                <h3 className="text-xl sm:text-2xl font-bold">{item.text2} - {item.text1}</h3>
                {/* <p className="text-sm uppercase font-light tracking-wider">{item.text2}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invest;