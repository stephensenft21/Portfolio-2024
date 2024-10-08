
import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Modal = ({ isOpen, onClose, children }) => {
  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
    config: { tension: 200, friction: 20 },
  });

  const overlayAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
  });

  return (
    <>
      {isOpen && (
        <animated.div
          style={overlayAnimation}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      <animated.div
        style={modalAnimation}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 max-w-lg w-full"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </animated.div>
    </>
  );
};
export default Modal