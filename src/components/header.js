import '../styles/header.css'

function Header(){
    return (
        <div className="header">
            <div className="left">
                <span className="name">shortifY</span>
            </div>
            <div className="right">
                <a href="">Home</a>
                <a href="">Contact</a>
            </div>
        </div>
    );
}

export default Header;