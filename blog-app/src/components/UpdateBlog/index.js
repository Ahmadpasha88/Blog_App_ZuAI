import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/posts/${id}`
        );
        const blog = response.data;
        setTitle(blog.title);
        setContent(blog.content);
        setImagePreview(blog.image_url);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

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

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (photo) {
      formData.append("image", photo);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/posts/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      Swal.fire({
        title: "Good job!",
        text: "Blog Updated Successfully!",
        icon: "success",
      });

      navigate("/");
    } catch (error) {
      console.error("Failed to update blog:", error);
    }
  };

  return (
    <div>
      <div className="row gap-2 col-12 m-auto shadow-sm p-2 rounded-3">
        <div className="col-12 col-lg-6 m-auto">
          <h5 className="fw-bold text-white text-center fs-5">Update Blog</h5>

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
              {loading ? "Updating..." : "Update Blog"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
