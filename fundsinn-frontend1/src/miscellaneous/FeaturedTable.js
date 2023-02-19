import {useEffect, useState} from "react";
import {Table, Col, Row, Button, Form, Modal, Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";


const SettingsModal = (props) => {

    const addToRemovedHeaders = (event) => {
        props.setSelectedRemovedHeaders(prev => [...prev, event.target.id])
    }

    const removeFromRemovedHeaders = (event) => {
        props.setSelectedRemovedHeaders(prev => prev.filter(id => id !== event.target.id))
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Settings
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Hide Columns</h4>
                <Button onClick={()=>props.setSelectedRemovedHeaders([])}>Reset</Button>
                {props.headerVals.map((header) => {
                    return (
                        <>
                            <Row>
                                {props.selectedRemovedHeaders.includes(props.headerIds[props.headerVals.indexOf(header)]) ?
                                    <Col sm={1}><input id={props.headerIds[props.headerVals.indexOf(header)]} checked="true" type="checkbox" onClick={removeFromRemovedHeaders}
                                    /></Col> :
                                    <Col sm={1}><input id={props.headerIds[props.headerVals.indexOf(header)]} type="checkbox" onClick={addToRemovedHeaders}/></Col>
                                }
                                <Col sm={1}><label>{header}</label></Col>
                            </Row>
                            <br/>
                        </>
                    )
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}




const FeaturedTable = ({data, setData, title}) => {
    const [index, setIndex] = useState(0)
    const [numOfRows, setNumOfRows] = useState(2)
    const [currPage, setCurrPage] = useState(1)
    const [numOfPages, setNumOfPages] = useState(null)
    const [modalShow, setModalShow] = useState(false);
    const [headerIds, setHeaderIds] = useState(["company", "communicate"]);
    const [headerVals, setHeaderVals] = useState(["Company", "Communicate"]);
    const [selectedRemovedHeaders, setSelectedRemovedHeaders] = useState([])

    useEffect(()=>{
        console.log("69 DATA", data)
    }, [data])

    const firstHandler = () => {
        setIndex(0)
        setCurrPage(1)
    }

    const numofRowsHandler = (event) => {
        setNumOfRows(Number(event.target.value))
    }

    const nextHandler = (event) => {
        setIndex(prev => prev + numOfRows)
        setCurrPage(prev => prev+1)
    }

    const backHandler = (event) => {
        setIndex(prev => prev - numOfRows)
        setCurrPage(prev=>prev-1)
    }

    const lastHandler = () => {
        setIndex(data.length-numOfRows)
        setCurrPage(numOfPages)
    }

    useEffect(() => {
        setNumOfPages(Math.ceil(data.length/numOfRows))
        setIndex(0)
        setCurrPage(1)
    }, [numOfRows])

    const sort = (event) =>{
        setData(prev => {
            const sortedData = [].concat(data).sort((a, b) => {
                if (a[event.target.id] < b[event.target.id]){
                    return -1
                }
                if (a[event.target.id] > b[event.target.id]){
                    return 1
                }
                return 0
            })
            return sortedData
        })
    }

    return (
        
            <Card style={{ width: '80rem', marginRight: "500px", marginTop: '200px' }}>
        <div>
            <Row>
                <div>
                    <h3>
                        {title}
                    </h3>
                </div>
            </Row>
            <Row style={{textAlign: "center"}}>
                <Col sm={2}>

                        <Form.Select name="cars" id="cars" onChange={numofRowsHandler} style={{width:"40%"}}>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="10">10</option>
                        </Form.Select>

                        

                </Col>
                <Col sm={5}>
                </Col>
                <Col sm={1}>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Settings
                    </Button>

                    <SettingsModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        headerIds={headerIds}
                        headerVals={headerVals}
                        selectedRemovedHeaders={selectedRemovedHeaders}
                        setSelectedRemovedHeaders={setSelectedRemovedHeaders}
                    />
                </Col>
                <Col sm={1}>
                    {index === 0 ?
                        <Button disabled>First</Button>
                        :
                        <Button onClick={firstHandler}>First</Button>
                    }
                </Col>
                <Col sm={1}>
                    {index === 0 ?
                        <Button disabled onClick={backHandler}>Back</Button>
                        :
                        <Button onClick={backHandler}>Back</Button>
                    }
                </Col>
                <Col sm={1}>
                    {index+numOfRows>data.length-1?
                        <Button disabled onClick={nextHandler}>Next</Button>
                        :
                        <Button onClick={nextHandler}>Next</Button>
                    }
                </Col>
                <Col sm={1}>
                    {data.length-numOfRows === index ?
                        <Button disabled>Last</Button>
                        :
                        <Button onClick={lastHandler}>Last</Button>
                    }
                </Col>


            </Row>
            <Row>
                <Col sm={2}>
                    {currPage}/{numOfPages}
                </Col>
                <Col></Col>
                
            </Row>
            <Table style={{width: "50%", margin: "auto"}}>
                <thead>
                    <tr>
                        {headerVals.map((header, i) =>
                            {
                                return !selectedRemovedHeaders.includes(headerIds[i]) ? <th>{header}</th>: null
                            }
                        )
                        }
                    </tr>
                </thead>
                <tbody>
                {data && data.slice(index, index+numOfRows).map((row)=>{
                    console.log(data)
                    return <tr>
                        {Object.keys(row).map((cell, i) => {
                            console.log(row[headerIds[i]])
                            return (
                                //headers[i] is the first cell
                                !selectedRemovedHeaders.includes(headerIds[i]) ?
                                    <td>{row[headerIds[i]]}</td> : null
                            )
                        })}
                    </tr>
                })}
                </tbody>
            </Table>
        </div></Card>
        
    )

};

export default FeaturedTable;
