import amazonlogo from "../assets/amazon-brands-solid (1).svg";
import tiktok from "../assets/tiktok-brands-solid.svg";
import xtwitter from "../assets/x-twitter-brands-solid.svg";
import linkedin from "../assets/linkedin-brands-solid.svg";
import meta from "../assets/meta-brands-solid.svg";

export const WorksWith = () => {

  return (
    <div className="platform-icons">
      <p className="text-sm text-slate-200 mb-8 text-center">Adtask AI works with :</p>

      <div className="icon-list mb-20">
        
        <div className="platform-card mr-6">
            <div className="glow-overlay"></div> {/* Glow Effect */}
            <div className="icon-container">
              <img src={amazonlogo} alt={amazonlogo} className="icon-img" width={30} />
            </div>
        </div>
        
        <div className="platform-card mr-6">
            <div className="glow-overlay"></div> {/* Glow Effect */}
            <div className="icon-container">
              <img src={tiktok} alt={tiktok} className="icon-img" width={30} />
            </div>
        </div>

        <div className="platform-card mr-6">
            <div className="glow-overlay"></div> {/* Glow Effect */}
            <div className="icon-container">
              <img src={meta} alt={meta} className="icon-img" width={30}/>
            </div>
        </div>

        <div className="platform-card mr-6">
            <div className="glow-overlay"></div> {/* Glow Effect */}
            <div className="icon-container">
              <img src={linkedin} alt={linkedin} className="icon-img" width={30} />
            </div>
        </div>

        <div className="platform-card mr-6">
            <div className="glow-overlay"></div> {/* Glow Effect */}
            <div className="icon-container">
              <img src={amazonlogo} alt={amazonlogo} className="icon-img" width={30}/>
            </div>
        </div>

        <div className="platform-card">
            <div className="glow-overlay"></div> {/* Glow Effect */}
            <div className="icon-container">
              <img src={xtwitter} alt={xtwitter} className="icon-img" width={30} />
            </div>
        </div>

      </div>
    </div>
  );
};
