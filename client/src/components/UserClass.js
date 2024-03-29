import React from "react";
import User from "./User";
class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <h2>Coutn2:{count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: dehradun </h3>
        <h4>Contact : pooja.maheshwari1312@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
