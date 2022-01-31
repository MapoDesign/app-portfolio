import { useEffect } from "react";
import useProductAPI from "./useProductAPI";

export default function FetchProduct(){
    const productClient = useProductAPI();
    useEffect(()=>{productClient.fetchProduct("m")},[]);

}