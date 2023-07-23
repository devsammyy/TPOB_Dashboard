import logo from "../../assets/logo.png";
import "./header.style.css";

const Header = () => {
    return (
        <header>
            <div className='top_bar'>
                <nav className='top_bar-nav'>
                    <ul className='top_bar-nav_container'>
                        <li className='nav_item'>
                            <a href='#' className='top_bar-nav_link'>
                                Customer login
                            </a>
                        </li>
                        <p> | </p>
                        <li className='nav_item'>
                            <a href='#' className='top_bar-nav_link'>
                                TPOB user{" "}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='secondary-nav_bar'>
                <div className='logo'>
                    <img src={logo} alt='' />
                </div>
                <nav className='secondary-nav'>
                    <ul className='secondary-nav_container'>
                        <li className='secondary-nav_item'>
                            <a href='#' className='secondary-nav_link'>
                                Home
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#' className='secondary-nav_link'>
                                About us
                            </a>
                        </li>
                        <li className='secondary-nav_item'>
                            <a href='#' className='secondary-nav_link'>
                                Our Services
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#' className='secondary-nav_link'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
