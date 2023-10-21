import axios from "axios";
import { useState,useEffect } from "react";
import { server } from "../App";

export default function useCategory() {
    const [categories,setCategories] = useState([]);

    //get categories
    const getCategories = async () => {
        try {
            const {data} = await axios.get(`${server}/api/v1/category/get-category`);
            setCategories(data?.category);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getCategories();
    },[]);

    return categories;
}