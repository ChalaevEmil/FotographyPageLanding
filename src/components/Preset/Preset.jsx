import "./Preset.css";
import wave from "../../images/services-img/wave.svg";
import image1 from "../../images/preset-img/img-1.png";
import image2 from "../../images/preset-img/img-2.png";
import image3 from "../../images/preset-img/img-3.png";
import { Link } from "react-router-dom";

export default function Preset() {
  return (
    <section className="preset" id="presets">
      <div className="preset__title-container">
        <img className="preset__title-image" src={wave} alt="Wave" />
        <h2 className="preset__title">Preset Store</h2>
        <p className="preset__title-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim <br />
          in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
          dolor <br />
          interdum nulla.
        </p>
      </div>

      <ul className="preset__list-container">
        <li className="preset__item">
          <img className="preset__item-image" src={image1} alt="Icon" />
          <div className="preset__item-container">
            <h3 className="preset__item-title">Mirro Preset Pack Vol. 01</h3>
            <p className="preset__item-paragraph">
              The first volume is my go-to presets when shooting action sports.
              Just the right <br/> amount of contrast and highlights to make your
              photo (literally) pop!
            </p>
          </div>
        </li>

        <li className="preset__item">
          <img className="preset__item-image" src={image2} alt="Icon" />
          <div className="preset__item-container">
            <h3 className="preset__item-title">Mirro Preset Pack Vol. 02</h3>
            <p className="preset__item-paragraph">
              Vol. 02 is dedicated solely to landscape photography. Pay
              attention to your<br/> exposure while out there and these presets will
              make your photos look great.
            </p>
          </div>
        </li>

        <li className="preset__item">
          <img className="preset__item-image" src={image3} alt="Icon" />
          <div className="preset__item-container">
            <h3 className="preset__item-title">Mirro Preset Pack Vol. 03</h3>
            <p className="preset__item-paragraph">
              These are a collection of my most used wedding presets — use with
              caution as<br/> you'll end up loving wedding photography.
            </p>
          </div>
        </li>
      </ul>
      <Link className="preset__link" to="*" target="_blank">
        Preset store &#8594;
      </Link>
      <div className="background-color"></div>
    </section>
  );
}
