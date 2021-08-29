import React, { Component } from 'react';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    return (
      <div className="list-group-item" onClick={this.handleClick} role="link" >
        {this.props.city.name}
      </div>
    );
  }
}

export default City;
