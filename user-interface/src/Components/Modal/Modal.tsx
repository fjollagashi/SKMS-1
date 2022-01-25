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
      <div className="modal-background background-open"></div>
      <div className="modal modal-open">
        <div className="modal-contents">
          {children}
          <button id="modal-cancel" onClick={hide}>
            MBYLL
          </button>
        </div>
      </div>
    </>
  );
};
