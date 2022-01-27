import { useState } from "react";
import axios from "axios";

export default async function useProductAPI(){
    const [data,setData] = useState(undefined);

    try{
        let result = await axios ({
            baseURL: 'https://www.thecocktaildb.com/api',
            url:'json/v1/1/search.php',
            method:'GET',
            headers:{Accept: '*/*'}
        });
        setData(result.data.drinks);
        return data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}