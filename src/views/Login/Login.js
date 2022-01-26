import { Col, Container, Row } from "react-bootstrap";
import SignUpForm from "../../Components/Form/signUpForm";

export default function List(){
    return <Container>
        <Row>
            <h1>Login</h1>
            </Row>    
        
        
        <Row>
            <SignUpForm />    
        </Row>
        
    </Container>
}