import React from "react";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      likeCount: 0,
    };
    console.log("Child Constructor called");
  }

  componentDidMount() {
    console.log("Child Component did mount called");
    this.fetchUserInfo();
  }

  async fetchUserInfo() {
    const data = await fetch("https://api.github.com/users/ranesh64");
    const json = await data.json();
    console.log(json);
    this.setState({
      user: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child Component DidUpdate called");
    console.log("Previous Count : " + prevState.likeCount);
    console.log("Current count : " + this.state.likeCount);
  }

  handleClick() {
    this.props.handleLike(this.state.likeCount);
    this.setState(
      {
        likeCount: this.state.likeCount + 1,
      },
      () => {
        console.log("Count updated to " + this.state.likeCount);
      }
    );
  }

  render() {
    console.log("Child render method called");
    return (
      <div>
        <h1 style={{ display: "inline-block", marginRight: "100px" }}>
          {this.state.user.name}
        </h1>
        <button
          style={{
            cursor: "pointer",
            padding: "4px",
            fontSize: "20px",
            borderStyle: "none",
            borderRadius: "16px",
            marginRight: "15px",
          }}
          onClick={() => this.handleClick()}
        >
          👍🏼
        </button>
        <span>{this.state.likeCount}</span>
        <p>{"@" + this.state.user.login}</p>
        <img src={this.state.user.avatar_url} alt="Profile Pic" />
      </div>
    );
  }
}
