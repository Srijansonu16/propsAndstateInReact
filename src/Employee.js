import * as React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: "decent" };
  }

  render() {
    return (
      <div>
        <h2>Employee Details...</h2>
        <p>
          <label>
            Name : <b>{this.props.Name}</b>
          </label>
        </p>
        I am feeling {this.state.mood};
      </div>
    );
  }
}

export default Employee;
