import React from "react";
import "../../Css/Modal.css";

interface ModalProps {
  children: React.ReactNode;
  hide: () => void;
}

export const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  hide,
}) => {
  return (
    <>
      <div className="modal-background"></div>
      <div className="modal">
        <div className="modal-contents">
          {children}
          <button id="modal-cancel" onClick={hide}>
            KTHEHU
          </button>
        </div>
      </div>
    </>
  );
};
