import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav className="headerNav">
                    <ul className="greyish">
                        <li><NavLink exact to="/" activeClassName="active" className="nav-link limeGreen">Home</NavLink></li>
                        <li><NavLink to="work-experience" activeClassName="active" className="nav-link limeGreen">Experience</NavLink></li>
                        <li><NavLink to="contact" activeClassName="active" className="nav-link limeGreen">Contact</NavLink></li>
                        
                    </ul>
            </nav>

        </>
    )
}