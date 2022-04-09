import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <>
        <div>
            <ul className="horizontal">
                <Link to="/" className="active">Home</Link>
                <Link to="/rockets" className="active">Rockets</Link>
            </ul>
        </div>
        
        </>
    )
}