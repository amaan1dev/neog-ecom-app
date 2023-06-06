import { Link } from "react-router-dom";
import "../Components/ComponentsStyleSheets/HomePageBanner.css";

export const HomePageBanner = () => {
  return (
    <div className="banner-container">

      <div className="main-banner">
        <Link className="banner-button" to="/products">
          <div className="banner-box"></div>
        </Link>
      </div>

      <div className="sub-top-banner">
        <Link className="banner-button" to="/products">
          <div className="banner-box"></div>
        </Link>
      </div>

      <div className="sub-bottom-banner">
        <Link className="banner-button" to="/products">
          <div className="banner-box"></div>
        </Link>
      </div>

    </div>
  );
};
