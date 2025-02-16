import { useEffect, useRef } from "react";

const logos = [
  "/src/assets/google.png",
  "/src/assets/salesforce2.jpg",
  "/src/assets/amazon5.jpg",
  "/src/assets/sony3.webp",
  "/src/assets/cocacola2.png",
  "/src/assets/intel2.png",
];

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
