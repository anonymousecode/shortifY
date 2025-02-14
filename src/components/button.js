import '../styles/button.css'

function Button({onClick}){
    return(
        <div className='button'>
            <button onClick={onClick}>Summarize</button>
        </div>
    );
}

export default Button;