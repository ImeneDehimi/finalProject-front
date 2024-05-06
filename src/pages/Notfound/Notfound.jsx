import './Notfound.css';
import image from "../../assets/404.webp"
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='not-found'>
            <div className='not-found-text'><h1>404</h1>
            <h3>Page not found</h3>
            <Link to={"/"}><button>Back To Home</button></Link>
            </div>
            <div>
            <img src={image} alt="" />
            </div>
           
        </div>
    );
};

export default Notfound;