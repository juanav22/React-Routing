import { Link } from "react-router-dom";


function Profile (){
    return (
        <div>
            <h1>Profile Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Profile;