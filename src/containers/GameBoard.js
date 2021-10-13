import React from 'react'
import * as actions from "../redux/actions/gameResult";
import { connect } from "react-redux";
import Box from '../components/BoardBox';
import { findWinner, areAllBoxesClicked } from '../utils';
import { Button } from 'react-bootstrap';


class GameBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            moveHistory: [],
            xIsNext: true,
            gameStatus: `It is X's turn.`
        }
    }

    handleBoxClick(index) {
        const { squares, moveHistory, xIsNext } = this.state
        const boxes = squares.slice()
        let tempHistory = moveHistory

        // Stop the game if board contains winning combination
        if (findWinner(boxes) || boxes[index]) {
            return
        }

        // Stop the game if all boxes are clicked (filled)
        if (areAllBoxesClicked(boxes) === true) {
            return
        }

        // Mark the box either as 'x' or 'o'
        boxes[index] = xIsNext ? 'X' : 'O'

        // Add move to game moveHistory
        tempHistory.push(xIsNext ? 'X' : 'O')

        this.setState({
            squares: boxes,
            moveHistory: tempHistory,
            xIsNext: !this.state.xIsNext
        }, () => this.updateStatus())
    }


    handleGameRestart = () => {
        this.setState({
            squares: Array(9).fill(null),
            moveHistory: [],
            xIsNext: true,
            gameStatus: `It is X's turn.`
        })
    }

    updateStatus = () => {
        const { gameData } = this.props
        let updateGameData = [...gameData]
        let status = '';

        // Get winner (if there is any)
        const winner = findWinner(this.state.squares)

        // Are all boxes checked?
        const isFilled = areAllBoxesClicked(this.state.squares)

        if (winner) {
            status = `The winner is player ${winner}!`
            updateGameData.push(`Player '${winner}' Won`)
            setTimeout(() => { alert(status) }, 0);
        } else if (!winner && isFilled) {
            status = 'Game drawn!'
            updateGameData.push(status)

        } else {
            status = `It is ${(this.state.xIsNext ? 'X' : 'O')}'s turn.`
        }

        this.props.saveGameResult(updateGameData)

        this.setState({
            gameStatus: status
        })
    }

    render() {
        const { gameStatus, moveHistory } = this.state

        return (
            <div className='game-board-wrapper'>
                <div className="board-header">
                    <h4>Let's start game</h4>
                    <Button size='small' onClick={this.handleGameRestart}>Start new game</Button>
                </div>

                <div className="board-wrapper">
                    <div className="board">
                        <h5 className="board-heading">{gameStatus}</h5>

                        <div className="board-row">
                            <Box value={this.state.squares[0]} onClick={() => this.handleBoxClick(0)} />

                            <Box value={this.state.squares[1]} onClick={() => this.handleBoxClick(1)} />

                            <Box value={this.state.squares[2]} onClick={() => this.handleBoxClick(2)} />
                        </div>

                        <div className="board-row">
                            <Box value={this.state.squares[3]} onClick={() => this.handleBoxClick(3)} />

                            <Box value={this.state.squares[4]} onClick={() => this.handleBoxClick(4)} />

                            <Box value={this.state.squares[5]} onClick={() => this.handleBoxClick(5)} />
                        </div>

                        <div className="board-row">
                            <Box value={this.state.squares[6]} onClick={() => this.handleBoxClick(6)} />

                            <Box value={this.state.squares[7]} onClick={() => this.handleBoxClick(7)} />

                            <Box value={this.state.squares[8]} onClick={() => this.handleBoxClick(8)} />
                        </div>
                    </div>

                    <div className="board-moveHistory">
                        <h5 className="board-heading">Moves History:</h5>

                        {/* List with moveHistory of moves */}
                        <div className="board-historyList">
                            {moveHistory.length === 0 ? <span>No moves to show.</span>
                                : moveHistory.map((move, index) => {
                                    return <li key={index}>Move {index + 1}: <strong>{move}</strong></li>
                                })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameData: state.gameResult && state.gameResult.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveGameResult: (data) => dispatch(actions.saveGameResult(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);