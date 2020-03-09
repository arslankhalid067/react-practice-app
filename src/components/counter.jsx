import React, { Component } from "react";

class Counter extends Component {
  //binding events
  // this.handleIncrement = this.handleIncrement.bind(this);

  // imageUrl: "https://picsum.photos/200"
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>No Tags</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  formatCounter() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
  badgeClasses() {
    let classes = "badge m-3 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  render() {
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.badgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
