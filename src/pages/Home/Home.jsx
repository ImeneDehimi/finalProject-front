import About from '../../components/About/About';
import CarouselComponent from '../../components/Carousel/CarouselComponent';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Services from '../../components/Services/Services';
import './Home.css';


const Home = () => {
    return (
        <div className='home'>
            <Navbar></Navbar>
            <CarouselComponent></CarouselComponent>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;