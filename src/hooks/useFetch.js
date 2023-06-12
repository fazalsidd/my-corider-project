import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [serverError, setServerError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const resp = await axios.get(url);
          const data = await resp?.data;
  
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setServerError(error);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { isLoading, data, serverError };
  };

  export default useFetch;