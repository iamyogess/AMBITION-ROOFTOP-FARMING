import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/auth";

const Comment = () => {
  const { id } = useParams();
  const [auth] = useAuth();

  const [data, setData] = useState({
    comment: "",
  });
  const [comment, setComment] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/comment/${id}/comments/create`,
        data
      );
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/comment/comments/${id}`
        );
        setComment(res.data);
      } catch (error) {
        console.log("Error fetching comments!", error);
      }
    };
    getComments();
  }, []);

  return (
    <div className="max-container padding-container mx-auto w-full py-10">
      {auth.user && (
        <form action="" onSubmit={handleComment} className="mx-auto">
          <input
            type="text"
            name="comment"
            placeholder="Your comment"
            onChange={handleChange}
          />
          <button type="submit">Comment</button>
        </form>
      )}

      <h1 className="bold-32 text-center">Related Comments</h1>
      {comment.map((item) => (
        <div key={item.id} className="py-3">
          <span>Anonymous User</span>
          <p className="text-black">{item.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comment;
