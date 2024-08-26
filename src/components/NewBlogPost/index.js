import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const NewBlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); 

    if (!title.trim()) {
      setError("Title is required.");
      setLoading(false);
      return;
    }
    if (!content.trim()) {
      setError("Content is required.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", photo);

    try {
      const response = await axios.post(
        "https://blogerapi-zuai.onrender.com/api/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      if (response.status === 401) {
        Swal.fire({
          title: "Unauthorized",
          text: "You don't have access to post. Please login first.",
          icon: "error",
        });
      } else if (response.status === 200) {
        Swal.fire({
          title: "Good job!",
          text: "Blog Posted Successfully!",
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to create blog:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while creating the blog need to login.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="minHeight">
      <div className="row gap-2 col-12 m-auto shadow-sm p-2 rounded-3">
        <div className="col-12 col-lg-6 m-auto">
          <h5 className="fw-bold text-white text-center fs-5">New Blog</h5>

          {error && <p className="text-danger text-center">{error}</p>}
          {success && <p className="text-success text-center">{success}</p>}

          <form onSubmit={handleSubmit}>
            <label className="newsLabel">Blog Title</label>
            <input
              type="text"
              placeholder="Enter Blog Title"
              className="col-12 p-3 border rounded-2 mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="newsLabel">Photo</label>
            <input
              type="file"
              className="col-12 p-2 border rounded-2 mb-2 text-dark bg-white"
              onChange={handlePhotoChange}
            />

            {imagePreview && (
              <div className="col-12 col-lg-5 m-auto border rounded-2 text-white">
                <img src={imagePreview} alt="Preview" className="col-12" />
              </div>
            )}

            <label className="newsLabel">Write Blog</label>
            <textarea
              className="col-12 p-3 rounded-2"
              rows="6"
              placeholder="Write blog here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="btn bg-white text-dark col-4 m-auto"
              disabled={loading}
            >
              {loading ? "Posting..." : "Post Blog"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPost;
