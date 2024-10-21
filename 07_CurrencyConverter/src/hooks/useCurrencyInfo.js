import {useEffect, useState} from 'react'

//it is not jsx file, it is a simple js program
//Hook is just a function , it's name starts with "use"
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect( ()=>{
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      ) //api call se value aati hai string me usko json me convert krna hota hai
      .then( (res)=> res.json())
      .then((res) => setData(res[currency]))
      console.log(data)
        
    }, [currency]) 
    console.log(data);
    return data;     
}


export default useCurrencyInfo;