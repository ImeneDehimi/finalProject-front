import "./ProfileInfo.css";
import Loading from "../Loading";

// eslint-disable-next-line react/prop-types
const ProfileInfo = ({ profile }) => {
  // eslint-disable-next-line react/prop-types
  const { category, businesshrs, description, images, wilaya, user } = profile;
  const sliderImages = images;
  if (!businesshrs) {
    // Render a loading indicator or return early if businesshrs is not available yet
    return <Loading />;
  }

  const days = businesshrs[0]?.day;

  return (
    <div className="profile-body">
      <h1>Personal information</h1>
      <div className="profile-infos">
        <div>
          <div className="profile-info-box">
            <p>
              <span>Name:</span> {user?.username}
            </p>
          </div>
          <div className="profile-info-box">
            <p>
              <span>Email:</span> {user?.email}
            </p>
          </div>
        </div>
        <div>
          <div className="profile-info-box">
            <p>
              <span>Profession:</span> {category}
            </p>
          </div>
          <div className="profile-info-box">
            <p>
              <span>Wilaya:</span> {wilaya}
            </p>
          </div>
        </div>

          <div className="profile-info-box">
            <span>Working hours:</span>
            <ul className="work-hours">
              {days?.map((day, index) => (
                <li key={index}>
                  <h4 className="day">{day}</h4>
                  <h4 className="hour">
                    {businesshrs[0]?.startingHour} -{" "}
                    {businesshrs[0]?.endingHour}
                  </h4>
                </li>
              ))}
            </ul>
          </div>
          <div className="profile-info-box">
            <p>
              <span>Description: </span>
              {description}
            </p>
          </div>
        <div className="profile-info-box-img">
          <p>
            <span>Images: </span>
          </p>
          <div className="info-images">
            {sliderImages?.map((imageUrl, index) => {
              return (
                <div className="image" key={index}>
                  <img src={imageUrl} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
