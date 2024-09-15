import "./Services.css";
import wave from "../../images/services-img/wave.svg";
import wedding from "../../images/services-img/wadding.svg";
import sports from "../../images/services-img/sports.svg";
import portrait from "../../images/services-img/portrait.svg";
import architecture from "../../images/services-img/architecture.svg";
import animal from "../../images/services-img/animal.svg";
import food from "../../images/services-img//food.svg";
import nature from "../../images/services-img/naturae.svg";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="services">
      <div className="services__title-container">
        <img className="servises__title-image" src={wave} alt="Wave" />
        <h2 className="services__title">Services</h2>
        <p className="services__title-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim <br/>in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor <br/> nterdum nulla.
        </p>
      </div>

      <ul className="services__list-container">
        <li className="services__item">
          <img className="services__item-image" src={wedding} alt="Icon" />
          <h3 className="services__item-title">Wedding Photography</h3>
          <p className="services__item-paragraph">
            Wedding photography is often called the bread and butter of
            photographers — but that doesn't mean it has to be boring. Quite the
            opposite!
          </p>
          <Link className="services__item-link" to="*" target="_blank">Read more &#8594;</Link>
        </li>

        <li className="services__item">
          <img className="services__item-image" src={sports} alt="Icon" />
          <h3 className="services__item-title">Sports Photography</h3>
          <p className="services__item-paragraph">
            Sports photography is awesome. Sitting on the sidelines with a
            massive telephoto allows me to get right into the action — I love
            shooting sports where there's a lot of explosive movement.
          </p>
          <Link className="services__item-link" to="*" target="_blank">Read more &#8594;</Link>
        </li>

        <li className="services__item">
          <img className="services__item-image" src={portrait} alt="Icon" />
          <h3 className="services__item-title">Portrait Photography</h3>
          <p className="services__item-paragraph">
            Who doesn't love portrait photography? I love being able to capture
            that expression, quirk, smile or whatever, that sort of defines a
            person.
          </p>
          <Link className="services__item-link" to="*" target="_blank">Read more &#8594;</Link>
        </li>

        <li className="services__item">
          <img className="services__item-image" src={architecture} alt="Icon" />
          <h3 className="services__item-title">Architecture Photography</h3>
          <p className="services__item-paragraph">
            The nice thing about shooting architecture (in my opinion) is that
            it's so easy to do. Seriously, just pick up your camera and get out
            there.
          </p>
          <Link className="services__item-link" to="*" target="_blank">Read more &#8594;</Link>
        </li>

        <li className="services__item">
          <img className="services__item-image" src={animal} alt="Icon" />
          <h3 className="services__item-title">Animal Photography</h3>
          <p className="services__item-paragraph">
            Whenever I'm travelling I always make sure to pack gear that allows
            me to capture the local wildlife. The eagle that takes flight in
            this picture is probably my most prized image.
          </p>
          <Link className="services__item-link" to="*" target="_blank">Read more &#8594;</Link>
        </li>

        <li className="services__item">
          <img className="services__item-image" src={food} alt="Icon" />
          <h3 className="services__item-title">Food Photography</h3>
          <p className="services__item-paragraph">
            I do food photography for blogs, restaurants, influencers, YouTube
            channels — but most importantly (if I manage to cook something that
            looks good) — I do food photography for myself.
          </p>
          <Link className="services__item-link" to="*" target="_blank">Read more &#8594;</Link>
        </li>

        <li className="services__item">
          <img className="services__item-image" src={nature} alt="Icon" />
          <h3 className="services__item-title">Nature Photography</h3>
          <p className="services__item-paragraph">
            Landscape photography just never gets old. Someone told me that
            those are the kinds of pictures you never look. Well, I don't agree.
          </p>
          <Link className="services__item-link" to="*" target="_blank">Read more &#8594;</Link>
        </li>
      </ul>
      <div className="background-color-ser"></div>
    </section>
  );
}
