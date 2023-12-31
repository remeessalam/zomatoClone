import React from "react";

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "================",
    };
    console.log("this is sample counstructor");
  }
  async componentDidMount() {
      // const json = await fetch(
          //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
          // );
          
          // const data = await json.json();
          // console.log(data);
          // this.setState({ tag: data });
          console.log("this is sample component did mount", this.props.name);
  }
  componentDitUpdate() {
    console.log("this is sample component did update");
  }
  render() {
    console.log("this is sample render");
    return <h1>This is a Sample page</h1>;
  }
}

export default Sample;
