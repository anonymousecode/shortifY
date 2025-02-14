import '../styles/output.css';

function Output({ summary }) {
    return (
        <div className='input'>
            <div className="outline">
                <h3>Summary</h3>
                <div className='box'>
                    <textarea
                        value={summary}
                        placeholder='Your summary will appear here'
                        readOnly
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default Output;