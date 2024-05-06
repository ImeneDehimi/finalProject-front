import './ProfileInfo.css';
import painter from "./../../assets/painter.webp";
import plumber from "./../../assets/plumber.webp";
import electrician from "./../../assets/electrician.webp";
import builder from "./../../assets/builder.webp";


const ProfileInfo = () => {

  
    const images = [
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
        {
          url: painter,
        },
        {
          url: painter,
        },
        {
          url: painter,
        },
      ];
      
    return (
        <div className="profile-body">
          <h1>Personal information</h1>
          <div className="profile-infos">
            <div>
              <div className="profile-info-box">
                <p>
                  <span>Name:</span> Michael Morgan
                </p>
              </div>
              <div className="profile-info-box">
                <p>
                  <span>Email:</span> otcize@nur.bd
                </p>
              </div>
            </div>
            <div>
              <div className="profile-info-box">
                <p>
                  <span>Profession:</span> Electrician
                </p>
              </div>
              <div className="profile-info-box">
                <p>
                  <span>Wilaya:</span> Alger
                </p>
              </div>
            </div>
            <div className="bottom-infos">
              <div className="profile-info-box">
                <p>
                  <span>Description: </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  iure quibusdam, exercitationem praesentium alias odio soluta
                  amet, nam quisquam a, natus id? Fugiat iure nostrum rem, a
                  quae vel voluptatem!
                </p>
              </div>
              <div className="profile-info-box">
                <p>
                  <span>Images: </span>
                </p>
                <div className="info-images">
                  {images.map((imageUrl, index) => {
                    return (
                      <div className="image" key={index}>
                        <img src={imageUrl.url} alt="movie" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ProfileInfo;