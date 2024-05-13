
import './Comment.css';
import { Rating, Stack } from '@mui/material';
import avatar from "../../assets/avatar.webp";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Comment = ({comment}) => {
  const userid = comment.postedBy
  const [user, setUser] = useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:5000/v1/user/${userid}`)
      .then((res) => {
        console.log(res.data);
      setUser(res.data)
      })
      .catch((err) => console.log(err));
  }, []);
  
    return (
        <div>
            <div className="comment">
              <div className="comment-user">
                <div>
                  <img src={user?.image ? user?.image : avatar} alt="" />
                </div>
                <div>
                  <h4>{user?.username}</h4>
                  <Stack spacing={1}>
                    <Rating
                      name="read-only" 
                      readOnly
                      value={comment?.rating}
                      precision={0.5}
                    />
                  </Stack>
                </div>
              </div>
              <p>
                {comment?.text}
              </p>
            </div>
            <hr />
        </div>
    );
};

export default Comment;