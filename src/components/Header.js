import React from "react";
import { Col } from 'react-bootstrap';


const Header = () => {
    return (
        <Col md={12} className='cust-header'>
            <div className='title'>
                <h5>Tic Tac Toe Game</h5>
            </div>
        </Col>
    )
}

export default Header;