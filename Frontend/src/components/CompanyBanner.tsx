import { useEffect, useRef } from "react";
import google from "../assets/google.png";
import salesforce from "../assets/salesforce2.jpg";
import amazon from "../assets/amazon5.jpg";
import sony from "../assets/sony3.webp";
import cocacola from "../assets/cocacola2.png";
import intel from "../assets/intel2.png";

const logos = [google, salesforce, amazon, sony, cocacola, intel];

export const CompanyBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (banner) {
      const clone = banner.innerHTML;
      banner.innerHTML += clone;
    }
  }, []);

  return (
    <div className="banner-wrapper mt-28 mb-24">
      <div ref={bannerRef} className="banner-content">
        {logos.map((logo, index) => (
          <div className="mr-30" key={index}>
            <img key={index} src={logo} alt="Company Logo" className="logo-img" width={120}/>
          </div>
        ))}
      </div>
    </div>
  );
};
