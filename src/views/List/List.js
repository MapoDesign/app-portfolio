import { useEffect, useState } from "react";
import FetchProduct from "../../Components/ClientAPI/FetchProduct";
import { Col, Container, Row } from "react-bootstrap";
import useProductAPI from "../../Components/ClientAPI/useProductAPI"
import ProductData from "../../Components/Products/ProductData";

export default function List(){
    //const[counter,setCounter] = useState(0)
  // Versione nuova
  const productClient = useProductAPI();

  console.log(productClient.data)
  //const errorObject = {
  //  message: "Sono un errore"
  //}
  
  //const cocktailQuery = {
  //  isLoading: false,
  //  isError: false,
  //  error: errorObject,
  //  data: ["a"]
  //}

  

  //useEffect(()=>{productClient.fetchProduct("m")},[]);
  FetchProduct();

  //useEffect(() => {
  //  axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php').then((response) => {
  //    setData(response.data.drink); 
  //  });
  //}, []);

  

  if (productClient.loading) {
      return (
      <div className="App">
        <header className="App-header white">Loading</header>
      </div>
    )
  }

  if (productClient.error) {
    return(
      <div className="App">
        <header  className="App-header white">Error : {productClient.error.message}</header>
      </div>
    )
  }

  if(!productClient.data || productClient.data.length === 0){
    return(
      <div className="App">
        <header className="App-header white">There is no data</header>
      </div>
    )
  }

    return <Container>    
        <Row>
            <Col><h1>Cocktail list</h1></Col>
        </Row>
        <Row>
            <p>This list is made from a API Client with API REST/CRUDE method (GET).</p>
        </Row>
        
        <div className="flex">
          {/* Parte vecchia */}
        {
          productClient.data.map((drink, index)=>{
            return <ProductData
              key={index}
              drink={drink}
              src={drink.strDrinkThumb}
              />
          })
        }

        {/* Parte nuova */}
        {/*productClient.data.map((drink, index)=>{
          return <div key={index}>
            {drink.strDrink}
            
          </div>
        })*/}
      </div>
            
    </Container>
}