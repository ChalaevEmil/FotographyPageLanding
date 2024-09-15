import "./Footer.css";
import logo from "../../images/footer-img/footer-logo.svg";
import link from "../../images/footer-img/linkIN.svg";
import FB from "../../images/footer-img/facebook.svg";
import IG from "../../images/footer-img/instagram.svg";
import twit from "../../images/footer-img/twit.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <img className="footer__logo" src={logo} alt="ЛОГО" />

      <div className="footer__list-container">
        <div className="footer__flex-container footer__flex-container-1">
          <div className="footer__nav-container">
            <h2 className="footer__nav-container-title">Pages</h2>
            <ul className="footer__nav-container-list">
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Home
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Store
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  About
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__nav-container">
            <h2 className="footer__nav-container-title">Store categories</h2>
            <ul className="footer__nav-container-list">
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Presets
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Prints
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__flex-container footer__flex-container-2">
          <div className="footer__nav-container">
            <h2 className="footer__nav-container-title">Preset packs</h2>
            <ul className="footer__nav-container-list">
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Mirro Preset Pack Vol. 01
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Mirro Preset Pack Vol. 02
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Mirro Preset Pack Vol. 03
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Mirro Preset Pack Vol. 04
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__nav-container">
            <h2 className="footer__nav-container-title">Business Areas</h2>
            <ul className="footer__nav-container-list">
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Wedding Photography
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Sports Photography
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Portrait Photography
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Architecture Photography
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Animal Photography
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Food Photography
                </Link>
              </li>
              <li className="footer__nav-container-item">
                <Link className="footer__nav-link" to="*" target="_blank">
                  Nature Photography
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__nav-container">
          <h2 className="footer__nav-container-title">Utility Pages</h2>
          <ul className="footer__nav-container-list">
            <li className="footer__nav-container-item">
              <Link className="footer__nav-link" to="*" target="_blank">
                Instructions
              </Link>
            </li>
            <li className="footer__nav-container-item">
              <Link className="footer__nav-link" to="*" target="_blank">
                Style guide
              </Link>
            </li>
            <li className="footer__nav-container-item">
              <Link className="footer__nav-link" to="*" target="_blank">
                Licenses
              </Link>
            </li>
            <li className="footer__nav-container-item">
              <Link className="footer__nav-link" to="*" target="_blank">
                Changelog
              </Link>
            </li>
            <li className="footer__nav-container-item">
              <Link className="footer__nav-link" to="*" target="_blank">
                404
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__nav-container">
          <h2 className="footer__nav-container-title footer__input-title">
            Newsletter
          </h2>
          <label className="footer__input-label" for="email">
            Subscribe to my newsletter where I share news about<br/> upcoming
            printings and preset sales.
          </label>
          <div className="footer__input-container">
            <input
              className="footer__input"
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
            ></input>
            <button className="footer__input-button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="footer__author">
        <div className="footer__author-container">
          <p className="footer__author-description">© Mirro Photography, LLC. All rights reserved. Powered by</p>
          <p className="footer__author-description">Webflow</p>
        </div>
        <div className="footer__author-social">
          <Link className="footer__author-link" to="*" target="_blank" >
            <img className="footer__author-img" src={link} alt="Иконка"/>
          </Link>
          <Link className="footer__author-link" to="*" target="_blank" >
            <img className="footer__author-img" src={FB} alt="Иконка"/>
          </Link>
          <Link className="footer__author-link" to="*" target="_blank" >
            <img className="footer__author-img" src={IG} alt="Иконка"/>
          </Link>
          <Link className="footer__author-link" to="*" target="_blank" >
            <img className="footer__author-img" src={twit} alt="Иконка"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
