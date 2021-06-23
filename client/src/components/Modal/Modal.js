import React from 'react';
import ReactModal from 'react-modal';
import Style from './Modal.module.scss';

const Modal = ({ isOpen, setIsOpen, children}) => {

  const customStyles = {
    overlay: {
      background: "#00000052",
      zIndex: "99",
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: 'unset',
      width: 'auto',
      background: 'unset',
      border: 'unset',
      overflow: 'unset',
    },
  };

  const clickClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={setIsOpen}
        style={customStyles}
        contentLabel="Modal"
      >
        <div className={Style.content}>
          <div className={Style.closeBtn}>
            <div className={Style.outer} onClick={clickClose}>
              <div className={Style.inner}>
                <label>close</label>
              </div>
            </div>

          </div>
          { children }
        </div>
      </ReactModal>
    </div>
  );
};

export default Modal;
