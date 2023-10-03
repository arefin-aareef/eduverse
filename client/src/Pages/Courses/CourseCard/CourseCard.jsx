import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useFavorite from "../../../hooks/useFavorite";

const CourseCard = ({ item }) => {
  const { _id, course_name, course_description, image, price } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useFavorite();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToFavorite = () => {
    if (user && user.email) {
      const favoriteItem = {
        courseId: _id,
        course_name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/favorites", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(favoriteItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course Added To Favorites",
              text: "Go To Dashboard To See Your Favorite List",
              showConfirmButton: false,
              timer: 2000,
            });
          } else if (data.message === "Item already exists in favorites.") {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: "Item Already in Favorites",
              text: "This course is already in your favorites list.",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please, Login to add favorites.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <div className="relative">
          <img
            src={image}
            alt={course_name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <button
            onClick={() => handleAddToFavorite(item)}
            className="btn btn-sm btn-outline mt-2 me-2 text-white hover:bg-red-500 absolute top-0 right-0"
          >
            Add To Favorites <MdOutlineFavoriteBorder />
          </button>
        </div>
      </figure>
      <div className="card-body bg-slate-700 text-white rounded-b-[15px]">
        <h2 className="card-title">{course_name}</h2>
        <p>{course_description}</p>
        <div className="card-actions justify-end">
          <Link to={`/courses/${_id}`}>
            <button className="mt-2 btn hover:btn-outline ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
