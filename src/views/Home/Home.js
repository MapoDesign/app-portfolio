import { Container, Image, } from "react-bootstrap";
import '../../App.css';

export default function Home(){
    return <>
        <header className="App-header">
        <Image src="https://images.pexels.com/photos/8658345/pexels-photo-8658345.jpeg" fluid />
        </header>
        <Container>
            <div><h1>React</h1></div>
            <div><h1>JavaScript Vanilla</h1></div>
            <div><h1>WordPress</h1></div>
            <div><h1>eCommerce</h1></div>
        </Container>
    </>
}