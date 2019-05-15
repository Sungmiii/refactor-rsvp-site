import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [response, setResponse] = useState('');

    useEffect(() => {
        (async () => {
            const res = await axios.get('http://localhost:9000/testAPI')
            setResponse(res.data)
        })()
    }, [])
    return (
        <div>get data from backend: {response}</div>
    )
};

export default App;