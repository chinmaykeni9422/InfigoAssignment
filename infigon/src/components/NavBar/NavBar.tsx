import  { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

function NavBar() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://uploads-ssl.webflow.com/63f5ff2d3827b085d542bb85/63f7a88567f036ab37603c94_Artboard%201%20copy%202.svg" className="h-8" alt="Your Logo Alt Text" />
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* Integrate the openModal function directly into the onClick */}
            <Button label="Register" onClick={openModal} />
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                    </ul>
          </div>

        </div>

      </nav>

      {/* Render the Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Modal content goes here */}
        <p>Modal Content Goes Here</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </>
  );
}

export default NavBar;


