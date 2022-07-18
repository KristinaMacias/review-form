import React from "react";
import Review from "./review";

export default class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>Passing a component</h1>
        <Review />
      </div>
    );
  }
}
