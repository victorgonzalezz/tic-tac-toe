import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';


class Scoreboard extends React.Component {
    render() {
        const { gameData } = this.props
        return (
            <div className="game">
                <div className="board-header">
                    <h4>Recent Games result</h4>
                    {gameData.length > 0 && (
                        <Link to="/board">
                            <Button size='small'>Start new game</Button>
                        </Link>
                    )}
                </div>
                {gameData.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Players</th>
                                <th>Match Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gameData.map((data, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{`Player1: X, Player2: O`}</td>
                                        <td>{data}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>

                    : <div className="display-text-center">
                        <h5>No match played yet.</h5>
                        <Link to="/board">
                            <Button size='small'>Start new game</Button>
                        </Link>
                    </div>
                }
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameData: state.gameResult && state.gameResult.data
    }
}

export default connect(mapStateToProps, null)(Scoreboard)