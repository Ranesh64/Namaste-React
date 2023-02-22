import { Link } from "react-router-dom";

const Title = () => <h1 className="title">Rotlo</h1>;

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Title />
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li>About</li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li>Contact</li>
            </Link>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
