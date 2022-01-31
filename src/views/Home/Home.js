import { Container, Image, } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../App.css';

export default function Home(){
    return <>
        <header className="App-header">
            <Link to="/list" id="React" class="sidebar"><h1>React</h1></Link>
            <Link to="https://mapodesign.github.io/libreria" id="JS" class="sidebar"><h1>JavaScript Vanilla</h1></Link>
            <Link to="https://www.mapodesign.com/category/blog/portfolio/wordpress" id="WordPress" class="sidebar"><h1>WordPress</h1></Link>
            <Link to="https://scambiaorto.it" id="eComm" class="sidebar"><h1>eCommerce</h1></Link>
        {/* <Image src="https://images.pexels.com/photos/8658345/pexels-photo-8658345.jpeg" fluid />*/}
        </header>
    </>
}