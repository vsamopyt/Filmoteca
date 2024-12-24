import Modal from 'react-modal';
import css from './CommonModalWindow.module.css';

Modal.setAppElement('#root');

const CommonModalWindow = ({
  isOpen,
  onClose,
  children,
  afterOpenModal,
  afterCloseModal,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} // to close modal on ESC and click on backdrop
      closeTimeoutMS={300}
      onAfterClose={afterCloseModal}
      onAfterOpen={afterOpenModal} // for animation
      overlayClassName={{
        base: css.ReactModalOverlay, // base class + animation
        afterOpen: css.ReactModalOverlayAfterOpen, // animation
        beforeClose: css.ReactModalOverlayBeforeClose, // animation
      }}
      className={{
        base: css.ReactModalContent, // base class + animation
        afterOpen: css.ReactModalContentAfterOpen, // animation
        beforeClose: css.ReactModalContentBeforeClose, // animation
      }}
    >
      <button className={css.modalCloseBtn} onClick={onClose}>
        x
      </button>
      {children}
    </Modal>
  );
};

export default CommonModalWindow;
