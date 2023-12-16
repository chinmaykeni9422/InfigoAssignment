# Infigo Assignment

Welcome to the Infigo Assignment project! This repository contains a set of reusable React components integrated with Tailwind CSS and documented using Storybook.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
  - [Storybook](#storybook)
  - [Component Details](#component-details)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Navbar Component**: A responsive navigation bar component.
  ![Alt text](image.png)
### Navbar
```Typescript
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
```

- **Modal Component**: A customizable modal component for displaying overlays.
![Alt text](image-1.png)
###Modal 
```Typescript
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
```

- **Card Component**: A card component with flexible styling options.
![Alt text](image-2.png)
### Card1
```typescript
import ImageCardItem from "../CardItem/ImageCardItem"


function Card({myData2}) {
  return (
    <>
        <div className="text-center font-serif  text-3xl pt-12">Why choose INFIGON program?</div>
        <div className="flex justify-center">
            {myData2.map((item) => <ImageCardItem image={item.img} des={item.description} />)}  
        </div>

    </>
  )
}

export default Card
```
![Alt text](image-3.png)
###Card2
```typescript
import Carditem from '../CardItem/CardItem'

interface ButtonProps {
  title: string;
  onClick: () => void; // Ensure that onClick is a function that takes no parameters
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
}


function Card2 ({
  myData,
  title,
  onClick,
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) {
 
  return (
    <>
        <div className='flex mb-4 justify-center'>
            {myData.map((item) => <Carditem title={item.label} label={item.title} /> )}
        </div>
    </>
  )
}

export default Card2
    
``` 

- **Button Component**: A versatile button component with Tailwind CSS integration.

###Button
![Alt text](image-4.png)
```typescript
import React from 'react';
import './button.css';

interface ButtonProps {
  title: string;
  onClick: () => void; // Ensure that onClick is a function that takes no parameters

  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
}

const Button: React.FC<ButtonProps> = ({ 
  title,
  onClick,
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <a
      href="#"
      type="button"
      // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {label}
    </a>
  );
};

export default Button;
```

**Form Component**: A form component for user input with Tailwind CSS styles.
![Alt text](image-5.png)
###Form
```typescript
import Button from '../Button/Button'

function Form() {
  return (
    <>
        
        <form className="max-w-md mx-auto">

            <div className="relative z-0 w-full mb-5 group">
                <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            
            <div className="relative z-0 w-full mb-5 group">
                <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">

                <div className="relative z-0 w-full mb-5 group">
                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>

            </div>

            <div className="grid md:grid-cols-2 md:gap-6">

                <div className="relative z-0 w-full mb-5 group">
                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
                </div>
                
            </div>

            <Button title={"Submit"} />
        </form>

    </>
  )
}

export default Form
```

## Installation

To use these components in your project, follow these steps:

## Steps
### Cammands

bash
1. npm create vite@latest
2. npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
3. npm sb init  
```

1. Clone the repository:

```bash
$ git clone https://github.com/chinmaykeni9422/InfigoAssignment.git
