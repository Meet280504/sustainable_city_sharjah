import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEnquiryModal } from "./EnquiryModal";
import "../App.css";

const villas = [
  {
    id: 1,
    title: "3 Bedroom Townhouses",
    // description: "5 & 6 Bedroom Villas",
    size: "2,344 to 2,725 Sq.Ft",
    price: "From: 2.46 - 2.92 Mn AED",
    img: "../Assets/gallery5.jpg",
  },
  {
    id: 2,
    title: "4 Bedroom Townhouses",
    // description: "5 to 7 Bedroom Villas",
    size: "3,303 to 3,681  Sq.Ft",
    price: "From: 3.30 - 3.86 Mn AED",
    img: "../Assets/gallery6.jpg",
  },
  {
    id: 3,
    title: "5 Bedroom Villas",
    // description: "5 to 7 Bedroom Villas",
    size: "5,103 Sq.Ft",
    price: "From: 5.52 Mn AED",
    img: "../Assets/gallery7.jpg",
  },
  // {
  //   id: 4,
  //   title: "5 Bedrooms Apartment with Pool",
  //   // description: "5 to 7 Bedroom Villas",
  //   size: "9608 SqFt",
  //   price: "From: 39.30Mn AED",
  //   img: "../Assets/gallery3.webp",
  // },
  // {
  //   id: 5,
  //   title: "3 Bedrooms Duplex",
  //   // description: "5 to 7 Bedroom Villas",
  //   size: "5618 - 5626 SqFt",
  //   price: "From: 23.73Mn AED",
  //   img: "../Assets/gallery4.webp",
  // },
  // {
  //   id: 6,
  //   title: "5 Bedrooms Duplex",
  //   // description: "5 to 7 Bedroom Villas",
  //   size: "11093 SqFt",
  //   price: "From: 51.70Mn AED",
  //   img: "../Assets/gallery2.webp",
  // },
];

const PriceSection = () => {
  const { openModal } = useEnquiryModal();
  return (
    <div id="price" className="bg-[#0d1b2a] py-10 pb-24">
      <h2 className="text-center text-[#997736] text-2xl font-bold mb-8">
        Price Overview
      </h2>

      {/* Desktop View - Grid */}
      {/* <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {villas.map((villa) => (
          <div
            key={villa.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={villa.img}
              alt={villa.title}
              className="w-full h-72 object-cover hover:scale-110 transition-transform duration-300"
            />
            <div className="p-6 text-center">
              <h3 className="text-[#997736] font-bold text-lg mb-2">
                {villa.title}
              </h3> */}
              {/* <p className="text-gray-600">{villa.description}</p> */}
              {/* <p className="text-gray-600">{villa.size}</p>
              <p className="text-gray-800 font-semibold">{villa.price}</p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="hidden md:block max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
        >
          {villas.map((villa) => (
            <SwiperSlide key={villa.id}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={villa.img}
                  alt={villa.title}
                  className="w-full h-72 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6 text-center">
                  <h3 className="text-[#997736] font-bold text-lg mb-2">
                    {villa.title}
                  </h3>
                  <p className="text-gray-600">{villa.size}</p>
                  <p className="text-gray-800 font-semibold">{villa.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile View - Carousel */}
      <div className="md:hidden px-4 overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {villas.map((villa) => (
            <SwiperSlide key={villa.id}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={villa.img}
                  alt={villa.title}
                  className="w-full h-72 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6 text-center">
                  <h3 className="text-[#997736] font-bold text-lg mb-2">
                    {villa.title}
                  </h3>
                  <p className="text-gray-600">{villa.description}</p>
                  <p className="text-gray-600">{villa.size}</p>
                  <p className="text-gray-800 font-semibold">{villa.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Center Button */}
      <div className="flex justify-center mt-10 p-4">
        <button onClick={openModal} className="mt-4 font-semibold border-2 rounded-md border-[#997736] text-[#997736] hover:text-white px-6 py-2 hover:bg-[#997736] transition">
          Browse Suatainable City Sharjah Townhouses & Villas
        </button>
      </div>
    </div>
  );
};

export default PriceSection;