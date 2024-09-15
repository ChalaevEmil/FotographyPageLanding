import "./Introduction.css";
import photo from "../../images/IMAGE.jpeg";

export default function Introduction() {
  return (
    <section className="introdusion" id="about">
      <div className="introdusion__container">
        <div className="background-color-1"></div>
        <div className="background-color-2"></div>
        <div className="introdusion__container-description">
          <h1 className="introdusion__container-title">
            Hi, I'm James Mirro &<br />
            I'm a photographer.
          </h1>
          <p className="introdusion__container-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            <br />
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra
            <br />
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat.
            <br />
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut
            <br />
            sem vitae risus tristique posuere.
          </p>
          <button className="introdusion__container-button">Read more</button>
        </div>
        <img src={photo} className="introdusion__container-photo" alt="Фото" />
      </div>
    </section>
  );
}
