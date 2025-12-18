// LuxuryPage.jsx
import React from "react";
// import "./LuxuryPage.css";
import "../App.css";
import { useEnquiryModal } from "./EnquiryModal";

const LuxuryPage = () => {
  const { openModal } = useEnquiryModal();
  return (
    <div id="about" className="luxury-page">
      {/* ----------- Section 1: Luxury Launch ----------- */}
      <section className="luxury-section">
        <div className="luxury-image">
          <img
            src="../Assets/banner2.webp"
            alt="Luxury View"
          />
        </div>
        <div className="luxury-text">
          <h2 className="font-semibold">
            About Address Grand Downtown
          </h2>
          <p>
            Address Grand Downtown offers 80 exclusive residences in Downtown Dubai, with stunning views of the Burj Khalifa and the sea. These luxurious homes feature grand proportions, high ceilings, custom furnishings, and marble flooring. Panoramic windows create a seamless indoor-outdoor experience. Opulent bathrooms with soaking tubs, premium kitchens, and customisable design elements ensure both style and functionality, making this a rare opportunity for sophisticated living in a prime location with high ROI potential.
          </p>
          <button onClick={openModal} className="mt-4 font-semibold border-2 rounded-md border-[#997736] text-[#997736] hover:text-white px-6 py-2 hover:bg-[#997736] transition">DOWNLOAD BROCHURE</button>
        </div>
      </section>
    </div>
  );
};

export default LuxuryPage;
