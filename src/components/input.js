import '../styles/input.css';
import { useState } from 'react';

function Input({ onTextChange }) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        onTextChange(e.target.value);
    };

    return (
        <div className='input'>
            <div className="outline">
                <h3>Input Text</h3>
                <div className='box'>
                    <textarea
                        value={text}
                        onChange={handleChange}
                        placeholder='Enter your text here (upto 5000 characters)'
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default Input;