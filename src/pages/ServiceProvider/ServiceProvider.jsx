import Navbar from "../../components/Navbar/Navbar";
import "./ServiceProvider.css";
import avatar from "../../assets/avatar.webp";
import { Rating, Stack } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ServiceProvider = () => {
  const { Id } = useParams();
  const [profile, setProfile] = useState({})
  const [user, setUser] = useState({})
  const [days, setDays] = useState([])
  const [images, setImages] = useState([])
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/v1/profile/${Id}`)
      .then((res) => {
        console.log(res.data);
        setProfile(res?.data)
        setUser(res?.data?.user)
        setDays(res?.data?.businesshrs[0]?.day)
        setImages(res?.data?.images)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="service-provider-container">
        <div className="service-provider">
          <div>
            <img src={user.image ? user.image : avatar} alt="" />
          </div>
          <div className="service-provider-text">
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
            <h3>{user.username}</h3>
            <p>{profile.category}</p>
            <p>{profile.wilaya}</p>
          </div>
        </div>
        <div className="service-provicer-btn">
          <button>message</button>
        </div>
        <div className="service-provider-details">
          <h3>Description</h3>
          <p>
            {profile.description}
          </p>
          <h3>Business hours</h3>
          <ul className="work-hours">
            {days?.map((day,index)=>(
              <li key={index}>
              <span className="day">{day}</span>
              <span className="hour">{profile.businesshrs[0].startingHour} - {profile.businesshrs[0].endingHour}</span>
            </li>
            ))}
           
          </ul>
          <h3>My work</h3>
          <div className="work-imgs">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
            >
              {images?.map((image, index) => {
                return (
                  <div className="slider" key={index}>
                    <img src={image} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="comments">
            <div className="comments-top">
              <h3>Comments</h3>
              <Link>Write a comment</Link>
            </div>
            <div className="comment">
              <div className="comment-user">
                <div>
                  <img src={avatar} alt="" />
                </div>
                <div>
                  <h4>Amanda Smith</h4>
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                labore, iure tenetur, fugit sed ab culpa ullam cumque libero,
                vel sunt dignissimos aperiam molestiae eligendi amet animi iusto
                expedita rerum.
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;
