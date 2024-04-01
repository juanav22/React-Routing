import { Link } from "react-router-dom";

function NotFound (){
    return (
        <div>
            <h1>404-Oops! This page does not exist!</h1>
            <nav style={menuStyles}>
                <ul style={menuListStyles}>
                    <li style={menuItemStyles}>
                        <Link to="/">Home </Link>
                    </li>
                    <li style={menuItemStyles}>
                        <Link to="/about">About</Link>
                    </li>
                    <li style={menuItemStyles}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li style={menuItemStyles}>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

const menuStyles = {
    backgroundColor: "#fff",
    padding: "10px 0",
    fontFamily: "Arial, sans-serif",
};

const menuListStyles = {
listStyleType: "none",
margin: 0,
padding: 0,
display: "flex", 
};

const menuItemStyles = {
margin: "0 10px", 
};

export default NotFound;