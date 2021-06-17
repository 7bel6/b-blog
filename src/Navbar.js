import { Link } from 'react-router-dom';

// statles functional component
const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>B-Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
export default Navbar;