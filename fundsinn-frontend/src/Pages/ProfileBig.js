import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button, Modal } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
 
import { saveLoan } from '../api/auth';

const ProfileBig = () => {

    const navigate = useNavigate()
    const [loan, setLoan] = React.useState(true)

    const inputChangeHandler = (event) => {
      console.log('Testing:', event.target.name, event.target.value);
      setLoan((prev) => {
          return {
              ...prev,
              [event.target.name]: event.target.value
          }
      })
  }

  React.useEffect(() => {
    
  })




    const loans = [{
        title: 'risk',
        desc: 'asoifwfwejif',
        
    }, 
    {
        title: 'risk2',
        desc: 'asoifwfwejif',
        
    },{
        title: 'risk3',
        desc: 'asoifwfwejif',
        
    },{
        title: 'risk4',
        desc: 'asoifwfwejif',
        
    }]

    const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSave = () => {
    saveLoan(loan, localStorage.getItem('companyName') ,navigate)
  }

    return (
        <div>
            <h1>Facebook</h1>
            <div className='grid'>
            {loans.map((cell, index)=>{
                return <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{loans[index].title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            })}
            </div>
            <Button onClick={handleShow}>Add Loan</Button>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Loan title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <label>Name</label>
            <input type="text" name='name' onChange={inputChangeHandler} />
            <label for="description">Description</label>
            <textarea  id="description" name='descripton' onChange={inputChangeHandler}/>
            <label>Amount</label>
            <input type="text" name='amount' onChange={inputChangeHandler}/>
            </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
      </Modal>

        </div>
    )
}

export default ProfileBig