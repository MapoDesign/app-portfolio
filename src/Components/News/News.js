
import { useState, useEffect } from 'react';
import NewSingle from './NewSingle';
import axios from 'axios';

function News(){

    const [data,setData] = useState([]);

    async function getUser() {
        try {
          const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c0c5fcd80fb14c87b72c496cf4c87522');
          console.log(response);
          setData(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }

      getUser();

      return <ul> {data.map(item => <li key={item.title}>{item.title}</li>)}</ul>
    
}

export default News;