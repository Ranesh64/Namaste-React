import React from "react";
import Profile from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.updateLikes = this.updateLikes.bind(this);
    console.log(" Parent Constructor called");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount called");
    this.timer = setInterval(() => {
      console.log("Set Interval called");
    }, 1000);
  }

  updateLikes = (likeCount) => {
    console.log("Update Likes called");
    this.setState({
      count: likeCount,
    });
  };

  componentDidUpdate() {
    console.log("Parent ComponentDidUpdate called");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log("Parent Render called");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the About us page of Rotlo.</p>
        <p style={{ marginBottom: "40px" }}>Like : {this.state.count}</p>
        <Profile handleLike={this.updateLikes}></Profile>
      </div>
    );
  }
}

export default About;
