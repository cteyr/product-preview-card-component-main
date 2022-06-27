// @ts-ignore
import image from "../assets/images/image-product-desktop.jpg";

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="left-container">
          <img src={image} alt="" />
        </div>
        <div className="right-container">
          <div className="tittle">
            <h5>PERFUME</h5>
          </div>
          <div className="sub-tittle">
            <h2>Gabrielle Essence Eau De Parfum</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainContainer };
