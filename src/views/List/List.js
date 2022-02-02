import { Col, Container, Row } from "react-bootstrap";
import News from "../../Components/News/News";


export default function List(){
   
    return <Container>    
        <Row>
            <Col><h1>News list</h1></Col>
        </Row>
        <Row>
            <p>This list is made from a API Client with API REST/CRUDE method (GET).</p>
        </Row>
        
        <News />
            
    </Container>
}