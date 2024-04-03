import "./footer.scss";
import facebook from "../../assets/social/facebook-white.svg";
import instagram from "../../assets/social/instagram-white.svg";
import twitter from "../../assets/social/twitter-white.svg";
import appStore from "../../assets/store/app-store.svg";
import playStore from "../../assets/store/play-store.svg";
import winStore from "../../assets/store/windows-store.svg";

export const Footer = () => {
  const links = [
    "Home",
    "Terms and Conditions",
    "Pribacy Policy",
    "Collection Statement",
    "Help",
    "Manage Account",
  ];
  return (
    <div className="footer pt-4">
      <div className="container-xl">
        {links.map((link) => (
          <a key={link} className="text-decoration-none" href="">
            {" " + link}
            {link === "Manage Account" ? " " : " |"}
          </a>
        ))}
        <p className="text-white pt-3">
          Copyright © 2016 DEMO Streaming. All Rights Reserved
        </p>
        <div className="row pt-3 ">
          <div className="col-lg-6 col-md-12 social_container">
            <img className="social_icon" src={facebook} alt="facebook" />
            <img className="social_icon" src={twitter} alt="twitter" />
            <img className="social_icon" src={instagram} alt="instagram" />
          </div>
          <div className="col-lg-6 col-md-12 store_container">
            <img className="store_icon" src={appStore} alt="facebook" />
            <img className="store_icon" src={winStore} alt="twitter" />
            <img className="store_icon" src={playStore} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};
