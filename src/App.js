import { useState, useEffect } from 'react';
import Body from './components/body';
import Header from './components/header';
import Input from './components/input';
import Output from './components/output';
import Button from './components/button';
import Loader from './components/loader';

function App() {
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);
 

    const handleSummarize = async () => {
        setLoading(true);
        const response = await fetch('https://shortify-backend-2bc6.onrender.com/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        const data = await response.json();
        setSummary(data.summary);
        setLoading(false);
    };

    return (
        <div className="App">
            <Header />
            <Body />
            <Input onTextChange={setText} />
            <Button onClick={handleSummarize} />
            {loading ? <Loader/>: <Output summary={summary} />}
        </div>
    );
}

export default App;