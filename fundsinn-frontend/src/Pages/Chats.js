import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Chats = () => {

    const pickChat = (event) => {
        console.log(event.target.id);
        
    }

    return (
        <div>
            <div className='chatbar'>
                <Row>
                    <Col>
                        <Row id="facebook"  onClick={pickChat} className='chatbox'>
                            <div>Facebook</div>
                            
                        </Row>
                        <Row id="google"  onClick={pickChat} className='chatbox'>
                            <div>Google</div>
                        </Row>
                        <Row id="amazon"  onClick={pickChat} className='chatbox'>
                            <div>Amazon</div>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Chats
