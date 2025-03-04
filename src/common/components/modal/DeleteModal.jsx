import Swal from "sweetalert2";
import "./modal.css";

const DeleteModal = ({deleteCv,id,closeModal,setShowModal}) => {
    function deleteButn() {
        deleteCv(id)
        setShowModal(false)
        Swal.fire("Success", "Delete cv", "success");
    }
  return (
    <div className="delete_modal_container">
      <div className="autlow"></div>
      <div className="modal_content">
        <h4>Confirm Delete</h4>
        <p>Are you sure you want to delete this CV?</p>
        <div>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={deleteButn}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
