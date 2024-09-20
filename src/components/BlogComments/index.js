import React, { useState, useEffect, useRef } from "react";
import { BsSendFill } from "react-icons/bs";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const BlogComments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const commentsEndRef = useRef(null);
  const [loading,setLoading]= useState(false);
  const [newPostCreated,setNewPostCreated]=useState(false);
  
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://blogerapi-zuai.onrender.com/api/comments/${blogId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch comments. Please try again later.");
        }

        const data = await response.json();
        setComments(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching comments:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      }
    };

    fetchComments();
  }, [blogId,newPostCreated]);

  useEffect(() => {
    if (commentsEndRef.current) {
      commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [comments]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    if (newComment.trim() === "") return;

    try {
      const response = await fetch(
        "https://blogerapi-zuai.onrender.com/api/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify({ blog_id: blogId, comment: newComment.trim() }),
        }
      );

      if (response.status === 401) {
        Swal.fire({
          icon: "warning",
          title: "Unauthorized",
          text: "You need to login first to post a comment.",
        });
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to post comment. Please try again later.");
      }

      const newCommentData = await response.json();
      setComments((prevComments) => [...prevComments, newCommentData]);
      setNewComment("");
      setNewPostCreated(true)
    } catch (error) {
      console.error("Error posting comment:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  return (
    <div className="text-dark bg-transparent">
      <h3 className="fw-bold text-decoration-underline">
        Comments ({comments.length})
      </h3>
      <p>{loading?<span>Posting Your Comment</span>:''}</p>
      <div className="my-3 p-2" style={{ height: "50vh", overflowY: "scroll" }}>
        {comments.length === 0 ? (
          <div className="text-center">
            <p>Be the first to comment</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.comment_id}
              className="mb-2 border border-0 border-bottom"
            >
              <p className="pb-0 mb-0">
                <strong>{comment.name}</strong>
              </p>
              <p className="text-dark-emphasis mb-0 pb-0">{comment.comment}</p>
            </div>
          ))
        )}
        <div ref={commentsEndRef} />
      </div>
      <div className="bg-dark p-3 d-flex align-items-center">
        <input
          type="text"
          placeholder="Post Your Comment"
          className="p-2 fs-6 fw-medium flex-grow-1 rounded-3"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button
          className="btn btn-light rounded-2 ms-2 py-1 fw-bold"
          onClick={handleCommentSubmit}
        >
          <BsSendFill className="fs-4" />
        </button>
      </div>
    </div>
  );
};

export default BlogComments;
