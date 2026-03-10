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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur p-4 h-full w-full">

      <div
        className="font-inter w-full rounded-2xl border border-border-secondary-alt bg-bg-primary shadow-xl flex flex-col "
        style={{ maxWidth: width || "520px" }}
      >
        
        {/* Header */}
        <div className="p-3xl border-b border-border-secondary">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-text-primary">
              {title}
            </h2>

            <button
              className="w-6 h-6 flex items-center justify-center"
              onClick={onClose}
            >
              <Cross />
            </button>
          </div>

          <p className="text-sm text-text-tertiary mt-1">
            {subtitle}
          </p>
        </div>

        {/* Body */}
        <div className="p-3xl flex flex-col gap-xl">
          {children}
        </div>

        {/* Footer */}
        <div className="p-3xl border-t border-border-secondary flex justify-end gap-lg">
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>

          <Button variant="primary">
            {buttonText}
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Modal;