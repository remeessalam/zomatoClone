import React from "react";
import Sample from "./Sample";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tag: "================",
    };
    console.log("this is about page constuctor");
  }
  async componentDidMount() {
      this.setState({ tag: "hai remees" });
      const json = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
          );
          
          const data = await json.json();
          console.log(data);
          this.setState({ tag: data });
          console.log("this is about page component did mount");
  }
  componentDidUpdate() {
    {
      this.state.tag;
    }
    console.log("this is about page componenet did update");
  }
  render() {
    console.log("this  about render");
    return (
      <div>
        <h1> this is about page</h1>
        <h2>{this.state.count}</h2>
        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add Count
        </button>
        <button onClick={() => this.setState({ count: 0 })}> Reset</button>
        <Sample name='first' />
        <Sample />
      </div>
    );
  }
}

export default About;
