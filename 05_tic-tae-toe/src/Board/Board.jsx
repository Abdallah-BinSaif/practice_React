import React from 'react'
import Square from '../square/Square'
import { useState } from 'react'

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))

    let winner = calculateWinner(squares);
        let status;
        if(winner){
            status = "Winner: " + winner;
        }else{
            status = "Next Player: " + (xIsNext?"X":"O")
        }

    function handleClick(i){
        const nextSquares = squares.slice();
        (squares[i] || calculateWinner(squares) ) || (xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O") // alter player and no overwrite and winner checking

        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }
  return (
    <div>
        <div>{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)}></Square>
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)}></Square>
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)}></Square>
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)}></Square>
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)}></Square>
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)}></Square>
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)}></Square>
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)}></Square>
            <Square value={squares[8]} onSquareClick={()=>handleClick(8)}></Square>
        </div>
    </div>
  )
}

function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [0,3,6],
        [2,5,8]
    ]
    for (let i = 0; i< lines.length; i++){
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null;
}
