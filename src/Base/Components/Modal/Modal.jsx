import React from "react";
import { Cross } from "../ComponentIcons/CompIcons";
import Button from "../Buttons/Button";

const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  buttonText,
  width,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur p-4 overflow-auto">
      
      <div
        className="font-inter rounded-2xl border-2 border-border-secondary-alt bg-bg-primary shadow-xl w-full"
        style={{ maxWidth: width || "512px" }}
      >
        <div className="gap-xs p-3xl border-b border-border-secondary">
          <div className="flex justify-between items-center">
            <h2 className="text-text-primary text-lg font-semibold leading-lg">
              {title}
            </h2>
            <button
              className="w-[24px] h-[24px] cursor-pointer"
              onClick={onClose}
            >
              <Cross />
            </button>
          </div>
          <p className="text-text-tertiary text-sm leading-sm font-normal">
            {subtitle}
          </p>
        </div>

        <div className="p-3xl">{children}</div>

        <div className="p-3xl flex justify-end gap-lg border-t border-border-secondary">
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button variant="primary">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
