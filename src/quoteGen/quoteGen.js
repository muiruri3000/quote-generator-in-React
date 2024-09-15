
import { useEffect, useState } from "react";



export default function QuoteGen(){
const [quoteData,setQuote] = useState({quote:'',author:'',category:''});
let api_key = '2hJeqQXOedcLlUUpc9hRgQ==A63JnJq3kjnc4CBy'

var category = 'happiness';
const fetchQuote = async () =>{

const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`,

{
    method : 'Get',
    headers :{
        'X-Api-Key' : api_key,
        'Content-Type' : 'application/json',
    },

}
);

if(!response.ok){
    throw new Error('Error fetching Quote')
}

const result = await response.json()
setQuote({quote: result[0].quote, author: result[0].author, category:result[0].category})

};

useEffect(()=>{

const interval = setInterval(()=>{

    fetchQuote();
},7000);
return ()=>clearInterval(interval)
},[])


return (

    <>
    <h3 style={{textAlign:'center'}}>- {quoteData.category.toUpperCase()} -</h3>
    <p style={{padding:'30px',textAlign:'center'}}>{quoteData.quote}</p>
    <p style={{textAlign:'end'}}>{quoteData.author}  </p>
    </>
)

}