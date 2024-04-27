import "./About.css";
import aboutimg from "./../../assets/about-img.webp";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={aboutimg} alt="" />
      </div>
      <div className="about-right">
        <div className="title">
          <div className="line"></div>
          <h2>Welcome to Handyman Services</h2>
        </div>
        <p>
          Your trusted partner in caring for and enhancing your home. As a
          dedicated team of professionals, we specialize in providing top-notch
          solutions for all your household needs. Whether it's fixing a leaky
          faucet, conducting routine maintenance checks, we've got you covered.
          With a wealth of experience and a commitment to excellence, we take
          pride in being your go-to choice for reliable and efficient handyman
          services. At Handyman, we understand the
          importance of a well-maintained home, and we're here to help you
          achieve your vision. Join the countless satisfied homeowners who have
          entrusted us with their projects, and let's work together to bring
          your dream home to life.
        </p>
      </div>
    </div>
  );
};

export default About;
