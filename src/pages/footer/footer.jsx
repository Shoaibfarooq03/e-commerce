import "./footer.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };
  const handleShop = () => {
    navigate("/shop");
  };

  const handleAbout = () => {
    navigate("/about");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="footerinfo">
        <div className="portion1">
          <h2>Funiro</h2>
          <p className="t1">400 University Drive Suite 200 Coral</p>
          <p className="t2">Gables</p>
          <p className="t3"> FL 33134 USA</p>
        </div>
        <div className="portion2">
          <h3>Links</h3>
          <ul>
            <li>
              <a onClick={handleHome}>Home</a>
            </li>
            <li>
              <a onClick={handleShop}>Shop</a>
            </li>
            <li>
              <a onClick={handleAbout}>About</a>
            </li>
            <li>
              <a onClick={handleContact}>Contact</a>
            </li>
          </ul>
        </div>
        <div className="portion3">
          <h3>Help</h3>
          <ul>
            <li>Payment Option</li>
            <li>Return</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="portion-horizontal">
          <h3>Newsletter</h3>
          <div class="subscription">
            <p className="email">Enter your email address</p>
            <p className="subs">SUBSCRIBE</p>
          </div>
        </div>
      </div>
      <div class="line2"></div>
      <div className="footerinfobottom">
        <div className="bottominfo">2023 furino. All rights reverved</div>
      </div>
    </>
  );
};

export default Footer;
