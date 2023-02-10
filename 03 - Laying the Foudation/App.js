import React from "react";
import ReactDOM from "react-dom/client";
import LogoImg from "./assets/logo.png";
import Avatar from "./assets/cat.png";

// DOM Manipulation using ReactDOM
const heading1 = React.createElement("h1", { key: "h1" }, "Heading1");
const heading2 = React.createElement("h2", { key: "h3" }, "Heading2");
const heading3 = React.createElement("h3", { key: "h3" }, "Heading3");

const header = React.createElement("div", { className: "title" }, [
  heading1,
  heading2,
  heading3,
]);

const headerJsx = (
  <div className="header">
    <h1>Heading1 JSX</h1>
    <h2>Heading2 JSX</h2>
    <h3>Heading3 JSX</h3>
  </div>
);

const HeaderComp = () => (
  <>
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
  </>
);

// Component composition
const Body = () => (
  <>
    <HeaderComp />
    <p>This is the body component. </p>
  </>
);

const Logo = () => <img className="logo" src={LogoImg} alt="logo"></img>;

const Header = () => {
  return (
    <div className="container">
      <Logo />
      <div className="search">
        <input type="text" placeholder="Search here..." className="searchBar" />
      </div>

      <div className="avatar">
        <a href="#">
          <img src={Avatar} alt="avatar" className="avatar_img"></img>
        </a>
      </div>
    </div>
  );
};

const reactroot = ReactDOM.createRoot(document.getElementById("root"));
reactroot.render(<Header />);
