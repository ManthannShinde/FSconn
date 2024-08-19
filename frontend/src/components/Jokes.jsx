import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Jokes() {

    const [jokes, setJokes] = useState([]); 
 
    useEffect(() => {
        axios.get('/jokes/customjokes')
        .then((response) => {
            setJokes(response.data);
        }) 
        .catch((error) => { 
            console.log(error);
        });
    }, []); 
 
  return (
    <>
        <h1>JOKES : {jokes.length}</h1>

        {
        jokes.map((joke) => (
            <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
            </div>
        ))
        }
    </>
  );
}

export default Jokes;
