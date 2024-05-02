import Navbar from "../../components/Navbar/Navbar";
import "./ServiceProvider.css";
import avatar from "../../assets/avatar.webp";
import { Rating, Stack } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import painter from "./../../assets/painter.webp";
import plumber from "./../../assets/plumber.webp";
import electrician from "./../../assets/electrician.webp";
import builder from "./../../assets/builder.webp";
import { Link } from "react-router-dom";

const ServiceProvider = () => {
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
  const sliderImageUrl = [
    //First image url
    {
      url: electrician,
    },
    {
      url: plumber,
    },
    //Second image url
    {
      url: builder,
    },
    //Third image url
    {
      url: painter,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="service-provider-container">
        <div className="service-provider">
          <div>
            <img src={avatar} alt="" />
          </div>
          <div className="service-provider-text">
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
            <h3>Jhon Doe </h3>
            <p>Electrician</p>
            <p>Alger</p>
          </div>
        </div>
        <div className="service-provicer-btn">
          <button>message</button>
        </div>
        <div className="service-provider-details">
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            impedit quia unde officiis optio voluptate excepturi cumque
            consectetur adipisci? Repellendus hic voluptatem impedit modi quas
            temporibus earum praesentium ipsa nulla. Architecto, praesentium
            nobis. Distinctio ipsum fugiat saepe cumque eveniet quas nisi
            aliquam iure ratione vero quisquam laudantium, repellendus ipsam
            atque nemo maiores explicabo. Necessitatibus aliquid quisquam
            facilis commodi eveniet enim? Est consequuntur quibusdam neque sint
            illo, accusantium quia incidunt. Minus libero quasi laboriosam,
            saepe nam ipsam, tempore laudantium temporibus ipsum obcaecati
            maiores, natus quia aspernatur. Voluptatum aspernatur neque itaque
            nobis.
          </p>
          <h3>Business hours</h3>
          <ul className="work-hours">
            <li>
              <span className="day">Sun</span>
              <span className="hour">9:00 AM - 5:00 PM</span>
            </li>
            <li>
              <span className="day">Mon</span>
              <span className="hour">9:00 AM - 5:00 PM</span>
            </li>
            <li>
              <span className="day">Tue</span>
              <span className="hour">9:00 AM - 5:00 PM</span>
            </li>
            <li>
              <span className="day">Wed</span>
              <span className="hour">9:00 AM - 5:00 PM</span>
            </li>
            <li>
              <span className="day">Thu</span>
              <span className="hour">9:00 AM - 5:00 PM</span>
            </li>
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
              {sliderImageUrl.map((imageUrl, index) => {
                return (
                  <div className="slider" key={index}>
                    <img src={imageUrl.url} alt="movie" />
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
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
              </div>
              </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              labore, iure tenetur, fugit sed ab culpa ullam cumque libero, vel
              sunt dignissimos aperiam molestiae eligendi amet animi iusto
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
