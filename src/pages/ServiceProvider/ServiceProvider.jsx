import Navbar from "../../components/Navbar/Navbar";
import "./ServiceProvider.css";
import avatar from "../../assets/avatar.webp";
import { Rating, Stack } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../../components/Comment/Comment";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";

const ServiceProvider = () => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const logeduser = useSelector((state) => state?.auth?.user?.user);


  const navigate = useNavigate()
  const { Id } = useParams();
  const [profile, setProfile] = useState({});
  const [user, setUser] = useState({});
  const [days, setDays] = useState([]);
  const [images, setImages] = useState([]);
  const [comments, setcomments] = useState([])
  const [value, setValue] = useState()

  // carousel images responsiveness

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

  // fetching data

  useEffect(() => {
    axios
      .get(`http://localhost:5000/v1/profile/${Id}`)
      .then((res) => {
        console.log(res.data);
        setProfile(res?.data);
        setUser(res?.data?.user);
        setDays(res?.data?.businesshrs[0]?.day);
        setImages(res?.data?.images);
        setcomments(res?.data?.comments);
      })
      .catch((err) => console.log(err));
  }, []);

  // handle modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      width: "450px",
      height: "250px",
      zIndex:"1005"
    },
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

// submitting a comment
const [comment, setComment] = useState("")

const handleComment = () =>{
  if (comment === "") return;
  axios.put(`${import.meta.env.VITE_URL}/profile/comment/${Id}`,{text : comment,postedBy: logeduser})
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => console.log(err));
}

  return (
    <>
      <Navbar />
      <div className="service-provider-container">
        <div className="service-provider">
          <div>
            <img src={user?.image ? user?.image : avatar} alt="" />
          </div>
          <div className="service-provider-text">
            <Stack spacing={1}>
              <Rating name="read-only" readOnly  defaultValue={2.5} precision={0.5} />
            </Stack>
            <h3>{user?.username}</h3>
            <p>{profile?.category}</p>
            <p>{profile?.wilaya}</p>
          </div>
        </div>
        <div className="service-provicer-btn">
          <button onClick={()=>{isAuthenticated ? navigate("/messages") : navigate("/login")}}>message</button>
        </div>
        <div className="service-provider-details">
          <h3>Description</h3>
          <p>{profile.description}</p>
          <h3>Business hours</h3>
          <ul className="work-hours">
            {days?.map((day, index) => (
              <li key={index}>
                <span className="day">{day}</span>
                <span className="hour">
                  {profile.businesshrs[0].startingHour} -{" "}
                  {profile.businesshrs[0].endingHour}
                </span>
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
              <Link onClick={()=>{isAuthenticated ? handleOpenModal() : navigate("/login")}}>Write a comment</Link>

              <ReactModal
                isOpen={showModal}
                contentLabel="Minimal Modal Example"
                style={customStyles}
              >
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Stack>
                <box-icon
                  onClick={handleCloseModal}
                  name="x"
                  color="#FF9E2A"
                  id="cancel"
                  size="md"
                ></box-icon>
                <textarea
                  className="writecomment"
                  name="comment"
                  id=""
                  placeholder="Write your comment"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button onClick={handleComment} className="submitmodal">Submit</button>
              </ReactModal>
            </div>
            {comments?.map((comment,index)=>(
              <Comment key={index} comment={comment} />
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;
