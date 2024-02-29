import React, { useEffect, useId } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Query.scss";
import {
  faComment,
  faThumbsDown,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/auth";
import axios from "axios";
import { Link } from "react-router-dom";

function Forum() {
  const [showButton, setShowButton] = useState(false);

  const handleTextAreaClick = () => {
    setShowButton(true);
  };

  const handleBlur = () => {
    setShowButton(false);
  };

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const [auth] = useAuth();
  const [data, setData] = useState({
    description: "",
    userId: auth.user ? auth.user.name || null : null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/post/add-post", data);
      window.location.reload();
    } catch (error) {
      console.log("Error posting", error);
    }
  };

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/post/get-post"
        );
        setPost(response.data.qus);
        setLoading(false);
      } catch (error) {
        console.log("Unable to get posts!", error);
      }
    };
    getPost();
  }, []);

  //like
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);

  const handleLike = () => {
    if (!likeClicked) {
      setLikes(likes + 1);
      setLikeClicked(true);
      if (dislikeClicked) {
        setDislikes(dislikes - 1);
        setDislikeClicked(false);
      }
    }
  };

  const handleDislike = () => {
    if (!dislikeClicked) {
      setDislikes(dislikes + 1);
      setDislikeClicked(true);
      if (likeClicked) {
        setLikes(likes - 1);
        setLikeClicked(false);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="forum py-12 mb-10 max-container padding-container">
        <div className="container">
          {auth.user && (
            <div className="forum-input m-start rounded-3xl w-[80%] m-auto px-[40px] py-7 mb-8 bg-[#FBF9FF] shadow-md">
              <form action="" onSubmit={handlePost}>
                <div className="flex items-center">
                  <div className="user-icon">
                    <FontAwesomeIcon
                      className="inline-block text-[20px] text-[#777]"
                      icon={faUser}
                    />
                  </div>
                  <textarea
                    onChange={handleChange}
                    onFocus={handleTextAreaClick}
                    onBlur={handleBlur}
                    cols="10"
                    rows="10"
                    placeholder="Add a Query..."
                    required
                    name="description"
                  ></textarea>
                  <input
                    type="submit"
                    value="Post"
                    className="bg-[#f3f2f5] text-[#797979] py-[8px] px-[25px] rounded-[50px]"
                  />
                </div>
              </form>
            </div>
          )}

          <div className="queries m-start rounded-3xl m-auto w-[80%] px-[40px] py-7 shadow-xl bg-[#FBF9FF]">
            {post.map((item) => (
              <div className="mb-7">
                <div className="flex items-center mb-[16px]">
                  <div className="user-icon mr-2">
                    <FontAwesomeIcon
                      className="inline-block text-[14px] text-[#777] bg-[#f3f2f5] py-[8px] px-[10px] rounded-[50%]"
                      icon={faUser}
                    />
                  </div>
                  <h6 className="text-[15px] font-semibold">
                    {/* {auth.user.name} */}
                    Anonymous User
                    <span className="font-normal text-[#797979] text-[13px]">
                      {"  "}
                      {item.createdAt.toLocaleString()}
                    </span>
                  </h6>
                </div>
                <div className="comment-section pb-[20px] tracking-[1px] border-b-[1px]">
                  <div key={item.id}>
                    <p className="text-[14px]">{item.description}</p>
                  </div>

                  <div className="review mt-5">
                    <div className="flex justify-start mb-[10px]">
                      <div className="rate flex items-center bg-[#F3F2F5] rounded-3xl px-4">
                        <div className="like border-r-[1px] border-[rgba(0,0,0,0.1)] me-3">
                          <div>
                            <FontAwesomeIcon
                              className="me-2 text-[14px] cursor-pointer"
                              icon={faThumbsUp}
                              onClick={handleLike}
                              style={{ color: likeClicked ? "blue" : "black" }}
                            />
                            <span className="me-3 text-[14px]">{likes}</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              className="me-2 text-[14px] cursor-pointer"
                              icon={faThumbsDown}
                              onClick={handleDislike}
                              style={{
                                color: dislikeClicked ? "blue" : "black",
                              }}
                            />
                            <span className="text-[14px]">{dislikes}</span>
                          </div>
                        </div>
                      </div>
                      <div className="rate flex bg-[#F3F2F5] rounded-3xl px-4 py-[6px] ms-3">
                        <p>
                          <Link to={`/comment/${item._id}`}>
                            <FontAwesomeIcon
                              className="text-[14px]"
                              icon={faComment}
                            />
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Forum;
