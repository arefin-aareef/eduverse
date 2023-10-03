import useFavorite from "../../../hooks/useFavorite";
import Swal from 'sweetalert2'
import { FaTrashAlt } from 'react-icons/fa';



const MyFavorite = () => {
    const [favorite, refetch] = useFavorite()

    const handleDelete = item => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/favorites/${item._id}`, {
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                refetch()
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            })
          }
        })
      }
    return (
        <div className="overflow-x-auto w-full ">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-white">
        <th>#</th>
        <th>Course</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        favorite.map((item, index) =>       <tr key={item._id}>
          <td>
            {index + 1}
          </td>
          <td>
           {item.course_name}
          </td>
          <td className="">${item.price}</td>
          <td>
            <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt /> </button>
          </td>
        </tr>)
      }

    </tbody>    
  </table>
</div>
    );
};

export default MyFavorite;