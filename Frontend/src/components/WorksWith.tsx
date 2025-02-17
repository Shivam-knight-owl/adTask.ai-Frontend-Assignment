import amazonlogo from "../assets/amazon-brands-solid (1).svg";
import tiktok from "../assets/tiktok-brands-solid.svg";
import xtwitter from "../assets/x-twitter-brands-solid.svg";
import linkedin from "../assets/linkedin-brands-solid.svg";
import meta from "../assets/meta-brands-solid.svg";
import Ads from "../assets/ads-brands-solid.svg";

export const WorksWith = () => {
  return (
    <div className="platform-icons">
      <p className="text-sm text-slate-200 mb-8 text-center">Adtask AI works with :</p>

      <div className="icon-list mb-20">
        {[  
          { logo: Ads, name: "Ads" },
          { logo: amazonlogo, name: "Amazon" },
          { logo: tiktok, name: "TikTok" },
          { logo: meta, name: "Meta" },
          { logo: linkedin, name: "LinkedIn" },
          { logo: xtwitter, name: "X/Twitter" },
        ].map((platform, index) => (
          <div className="platform-card" key={index}>
            <div className="glow-overlay"></div> 
            <div className="icon-container">
              <img src={platform.logo} alt={platform.name} className="icon-img" width={30} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
