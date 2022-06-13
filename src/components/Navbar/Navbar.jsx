import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navlist">
            <a className="nav-item" href="/"><li className="nav-item"> Designs </li></a>
            <a className="nav-item" href="./Education"><li className="nav-item"> Education </li></a>
            <a className="nav-item" href="/"><li className="nav-item"> About me </li></a>
            </ul>
        </nav>
      );
}
 
export default Navbar;