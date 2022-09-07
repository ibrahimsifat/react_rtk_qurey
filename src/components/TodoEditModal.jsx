import React, { useState } from "react";
import Modal from "react-modal";
import cancelImage from "../assets/images/cancel.png";
import EditImage from "../assets/images/edit.png";

const TodoEditModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // edit todos
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <img
        onClick={openModal}
        className="flex-shrink-0 h-5 w-5 group cursor-pointer hover:scale-110"
        src={EditImage}
        alt=""
      />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal} className="absolute top-1 right-1">
          <img
            onClick={openModal}
            className="flex-shrink-0 h-6 w-6 group cursor-pointer hover:scale-110"
            src={cancelImage}
            alt=""
          />
        </button>
        <div>I am a modal</div>
        <form>
          <input placeholder="Upade" />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default TodoEditModal;
