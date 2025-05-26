import React, { useEffect, useState } from "react";

export const Toast = ({ statusColor, text, isOpen, duration = 2500, onClose }) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    setShow(isOpen);
    if (isOpen) {
      const timer = setTimeout(() => {
        setShow(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    <div className="toast toast-top toast-center pointer-events-none">
      <div
        className={
          `alert ${statusColor} transition-all duration-500 ease-in-out
          ${show ? "opacity-100 translate-y-6" : "opacity-0 -translate-y-10"}`
        }
        
      >
        <span>{text}</span>
      </div>
    </div>
  );
};
