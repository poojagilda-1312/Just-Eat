import React from "react";
class LifeClass extends React.Component {
  constructor() {
    super();
    console.log("constructor is called ");
  }
  async componentDidMount() {
    console.log("componentdid mount is called");
    const data = await fetch("https://api.github.com/users/pooja");
    const json = await data.json();
    console.log(json);
  }

  render() {
    console.log("render is called");
    return <div></div>;
  }
}
export default LifeClass;
