import React, { useEffect, useState } from "react";
import axios from "axios";

const Quiz = () => {

    const url = 'http://localhost:8000/api/quotes';

    const [quotes, setQuotes] = useState([]);

    const getQuotes = () => {
        axios.get(url)
            .then((response) => { 
                console.log(response.data);
                const data = response.data;
                setQuotes(data.quotes);
            }); 
    };

    useEffect(() => getQuotes(), []);
    return (
        <div>
            <h1>
                Quiz...
            </h1>
             {quotes.map((quote)=> (
                <li>Quote: <strong>{quote.text}</strong> - Author: {quote.author}</li>
            ))}
            <li>

            </li>
        </div>
    )
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export default Quiz;