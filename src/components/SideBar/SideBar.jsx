import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <h1>Profile</h1>
            <hr />
            <ul>
                <Link><li>Personal info</li></Link>
                <hr />
                <Link><li>Settings</li></Link>
            </ul>
        </div>
    );
};

export default SideBar;