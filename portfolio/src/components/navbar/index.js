import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserLarge, faDiagramProject, faPhone } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Navbar() {
    return (
        <div className='nav'>
            <ul>
                <li>
                    <a href='#' className='logo'>
                        <FontAwesomeIcon className='fonticon' icon={faHouse} />
                        <span className="nav-item">Home</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon className='fonticon' icon={faUserLarge} />
                        <span className="nav-item">About</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon className='fonticon' icon={faDiagramProject} />
                        <span className="nav-item">Projects</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon className='fonticon' icon={faPhone} />
                        <span className="nav-item">Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;