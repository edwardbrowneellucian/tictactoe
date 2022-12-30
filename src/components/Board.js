import React from 'react';
import '../App.css';
import Square from './Square';
class Board extends React.Component{

 

    renderSquare(i) {
        const winner = (this.props.winsquares ? this.props.winsquares.includes(i) : false) ;
        const myClass = (winner ? "square_win": "square");

        return (
        <Square 
        myClass={myClass}
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
        />
        );
    }

    render() {

        return (
         
          <div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }

      
}


export default Board