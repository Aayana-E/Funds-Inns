import React from "react";
import FeaturedTable from "../miscellaneous/FeaturedTable";
import { Button, Card } from "react-bootstrap";



const LoanBig = () => {

    const [data, setData] = React.useState([
        {company: 'Google',
        communicate: <Button variant="info">Start Chat</Button>
}, {company: 'Facebook',
communicate: <Button variant="info">Start Chat</Button>
}, {company: 'JPMC',
communicate: <Button variant="info">Start Chat</Button>
}, {company: 'Amazon',
communicate: <Button variant="info">Start Chat</Button>
}, {company: 'Apple',
communicate: <Button variant="info">Start Chat</Button>
}, {company: 'Microsoft',
communicate: <Button variant="info">Start Chat</Button>
}, {company: 'Sony',
communicate: <Button variant="info">Start Chat</Button>
}, {company: 'Tesla',
communicate: <Button variant="info">Start Chat</Button>
},])

    return (
        <div>
            <div>
                <div style={{marginLeft:"1400px", marginTop:"40px"}}>Company Name</div>
        <Card style={{width: "50%", margin: 'auto', marginTop: "100px"}}>
            <Card.Title>Venture</Card.Title>
            <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea dictumst quisque sagittis. Ante metus dictum at tempor commodo ullamcorper. Hac habitasse platea dictumst vestibulum. Pellentesque adipiscing commodo elit at imperdiet dui. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Velit ut tortor pretium viverra suspendisse potenti nullam. Purus viverra accumsan in nisl nisi scelerisque eu. Velit laoreet id donec ultrices tincidunt. Consectetur adipiscing elit pellentesque habitant morbi tristique. Ac tortor vitae purus faucibus. Non blandit massa enim nec dui. Eros in cursus turpis massa tincidunt dui ut. Lorem ipsum dolor sit amet consectetur. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Mi quis hendrerit dolor magna eget est lorem ipsum. Nisl pretium fusce id velit ut tortor pretium viverra. Eleifend donec pretium vulputate sapien nec. Vestibulum lorem sed risus ultricies.</Card.Body>
        </Card>
        </div>
        <div style={{margin: 'auto', width: "70%"}}>
            
            <FeaturedTable data={data} title="Applicants" setData={setData}/>
        </div>
        
        </div>
    )
}


export default LoanBig