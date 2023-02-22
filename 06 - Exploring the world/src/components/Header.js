const Title = () => <h1 className="title">Rotlo</h1>;

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <Title />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
