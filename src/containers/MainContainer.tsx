// @ts-ignore
import image from "../assets/images/image-product-desktop.jpg";

import { Button } from "../components/Button";

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="left-container">
          <img src={image} alt="" />
        </div>
        <div className="right-container">
          <div className="inter-right-container">
            <div className="tittle">
              <h5>PERFUME</h5>
            </div>
            <div className="sub-tittle">
              <h2>Gabrielle Essence Eau De Parfum</h2>
            </div>
            <div className="text">
              <p>
                A floral, solar and voluptuos interpretation composed by Olivier
                Polge, Perfumer-Creator for the House of CHANEL.
              </p>
            </div>
            <div className="price">
              <div className="actual-price">
                <h1>$149.99</h1>
              </div>
              <div className="discount">
                <h5>$169.99</h5>
              </div>
            </div>

            <Button classNames="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainContainer };
