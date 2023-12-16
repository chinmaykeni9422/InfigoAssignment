import React, { ReactNode } from 'react';
import Form from '../Form/Form';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const overlayStyles = isOpen
    ? 'fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'
    : 'hidden';

  const modalStyles = isOpen
    ? 'relative w-auto max-w-3xl mx-auto my-6 opacity-100 transform scale-100'
    : 'opacity-0 transform scale-95';

  return (
    <div className={overlayStyles} onClick={onClose}>

      <div
        className={`bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none ${modalStyles}`}
        onClick={(e) => e.stopPropagation()}
      >

        <div className="relative flex flex-col w-full">

          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">Register Form</h3>

            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black">×</span>
            </button>

          </div>

          <div className="relative p-6 flex-auto">
            {/* {children} */}
            <Form />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Modal;
