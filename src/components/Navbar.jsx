import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {


    return (
        <div className="navbar">
            <nav>
                <h1>Art Portfolio</h1>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/SaleSection">Artwork Showcase</Link>
                <Link to="/Contact">Contact</Link>

            </nav>
        </div>
    );
};
export default Navbar;