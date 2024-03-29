import React from "react";
import UserClass from "./UserClass";
import LifeClass from "./LifeClass";
// import User from "./User";

const About = () => {
  return (
    <div>
      <h1>About </h1>
      <h2> this is about page </h2>
      <UserClass name="pooja classbased"></UserClass>
      <LifeClass></LifeClass>
    </div>
  );
};
export default About;
