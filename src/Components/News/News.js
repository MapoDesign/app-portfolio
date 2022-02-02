
import { useState } from 'react';
import axios from 'axios';

function News(){

    const [data,setData] = useState([]);

    async function getUser() {
        try {
          const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
          
          setData(response.data.drinks);
        } catch (error) {
          console.error(error);
        }
      }

      getUser();

      return <div className='flex'> {data.map(item => <div className='product-card'><p className='title'>{item.strDrink}</p><img src={item.strDrinkThumb} alt={item.strDrink} height="200" width="200" /></div>)}</div>
    
}

export default News;