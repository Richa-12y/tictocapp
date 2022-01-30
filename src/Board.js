import React from 'react';
import Square from './Square';
import { calculatewinner } from './Utils';
import style from './App.module.css';


class Board extends React.Component {
    state ={
        Square:Array(9).fill(null),
        isPlayerx:true
    }
    onInputChange =(index) =>{
       const Square =this.state.Square.slice()
       if(Square[index] || calculatewinner(Square))
       return
       Square[index] =this.state.isPlayerx ?'x':'o'
       this.setState({Square:Square,isPlayerx:!this.state.isPlayerx})
    }
    render() {
        const winner = calculatewinner(this.state.Square)
         let status =''
         if(winner)
         status = "Winner is: " + winner
           else if(this.state.isPlayerx)
            status ='Next Player x' 
            else
            status = 'Next Player o'
        return (
            
            <div>
                <div className={style.status}>{status}</div>
                <div className={style.board_row}>
                    <Square value={this.state.Square[0]} onClick={()=>this.onInputChange(0)}/>
                    <Square value={this.state.Square[1]} onClick={()=>this.onInputChange(1)}/>
                    <Square value={this.state.Square[2]} onClick={()=>this.onInputChange(2)}/>
                </div>
                <div className={style.board_row}>
                    <Square value={this.state.Square[3]} onClick={()=>this.onInputChange(3)}/>
                    <Square value={this.state.Square[4]}onClick={()=>this.onInputChange(4)}/>
                    <Square value={this.state.Square[5]}onClick={()=>this.onInputChange(5)}/>
                </div>
                <div className={style.board_row}>
                    <Square value={this.state.Square[6]}onClick={()=>this.onInputChange(6)}/>
                    <Square value={this.state.Square[7]}onClick={()=>this.onInputChange(7)}/>
                    <Square value={this.state.Square[8]}onClick={()=>this.onInputChange(8)}/>
                </div>
            </div>)
    }
}
export default Board;