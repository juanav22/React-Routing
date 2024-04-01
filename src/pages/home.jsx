import { Link, useNavigate } from "react-router-dom";

import './app.css'


function Home (){
    const navigate = useNavigate()

    const handleNavigateToButton = () => {
        navigate('/contact')
    }

    return (
        <div>
            <h1>Home Page</h1>
            <nav style={menuStyles}>
                <ul style={menuListStyles}>
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
            <button className="btn" onClick={handleNavigateToButton}>Go to Contact</button>
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
  


export default Home;