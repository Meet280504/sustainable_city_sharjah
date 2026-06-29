// LuxuryPage.jsx
import React from "react";
// import "./LuxuryPage.css";
import "../App.css";
import { useEnquiryModal } from "./EnquiryModal";
import { FaLocationDot } from "react-icons/fa6";

const LuxuryPage = () => {
  const { openModal } = useEnquiryModal();
  return (
    <div id="about" className="luxury-page">
      {/* ----------- Section 1: Luxury Launch ----------- */}
      <section className="luxury-section">
        <div className="luxury-image">
          <img
            src="../Assets/gallery4.jpg"
            alt="Luxury View" 
          />
        </div>
        <div className="luxury-text">
          <h2 className="font-semibold">
          SUSTAINABLE CITY 2 SHARJAH - Phase 2
          </h2>
          <div className="luxury-location flex items-center">
            <FaLocationDot className="text-[#997736] mr-2" />
            <span className="text-[#997736] font-bold text-lg">Al Rahmaniya 1, Sharjah</span>
          </div>
          <p>
            Sharjah Sustainable City II marks the next chapter in the successful partnership between the Sharjah Investment and Development Authority (Shurooq) and See Holding, advancing their vision of exceptional, future-focused communities. Blending innovation with responsibility, Sharjah Sustainable City II meets the highest sustainability standards while elevating everyday living, creating a vibrant community that inspires generations.
          </p>
          <button onClick={openModal} className="mt-4 font-semibold border-2 rounded-md border-[#997736] text-[#997736] hover:text-white px-6 py-2 hover:bg-[#997736] transition">DOWNLOAD BROCHURE</button>
        </div>
      </section>
    </div>
  );
};

export default LuxuryPage;
