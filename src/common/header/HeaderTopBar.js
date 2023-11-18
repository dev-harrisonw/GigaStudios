import Link from "next/link";
import {
  FiChevronRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

const HeaderTopBar = () => {
  return (
    <div className="header-top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="header-left">
              <p>
                <a href="#link">
                  Unleash the power of the web today
                  <FiChevronRight />
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="header-right">
              <div className="address-content">
                <p>
                  <FiMapPin />
                  <span>Manchester, UK</span>
                </p>
                <p>
                  <FiPhone />
                  <span>
                    <a href="#">+44 7984 980188</a>
                  </span>
                </p>
              </div>
              <div className="social-icon-wrapper">
                <ul className="social-icon social-default icon-naked">
                  <li>
                    <Link href="#">
                      <FiFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FiTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/gigastudiosltd">
                      <FiInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/gigastudios/">
                      <FiLinkedin />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
