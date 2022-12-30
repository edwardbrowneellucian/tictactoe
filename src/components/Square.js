import React from 'react';
import '../App.css';
class Square extends React.Component {


    render() {
      return (
        <button 
        className={this.props.myClass}
        onClick={() => this.props.onClick()}
        >
         {this.props.value}
         </button>
      );
    }
  }

  export default Square