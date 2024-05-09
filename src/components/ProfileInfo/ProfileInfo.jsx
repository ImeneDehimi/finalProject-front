import { useEffect, useState } from 'react';
import './ProfileInfo.css';


// eslint-disable-next-line react/prop-types
const ProfileInfo = ({profile}) => {
console.log(profile);
// eslint-disable-next-line react/prop-types
const {category, businesshrs, description, images, wilaya, user} = profile
const sliderImages = images
    
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
            <div className="bottom-infos">
              <div className="profile-info-box">
                <p>
                  <span>Description: </span>
                  {description}
                </p>
              </div>
              <div className="profile-info-box">
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
        </div>
    );
};

export default ProfileInfo;