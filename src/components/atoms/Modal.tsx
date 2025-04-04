"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type ModalOnClose = () => void;

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  onSuccess?: () => void;
  onClose?: ModalOnClose;
  isOpen: boolean;
}

const Modal = ({
  className,
  children,
  onClose,
  isOpen,
  ...props
}: ModalProps) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (onClose) {
        if (event.key === "Escape") {
          onClose();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    // 포탈 박스 가져오기
    setPortalElement(document.getElementById("portal"));
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", (event: KeyboardEvent) => {
        handleKeyDown(event);
      });
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !portalElement) return null;

  // 포탈 박스 없으면 null
  if (!portalElement) return null;
  // 포탈 박스 있으면 이동
  return createPortal(
    <div
      className="modal fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn(
          "w-[85%] max-w-[400px] rounded-2xl bg-white px-7 py-5",
          className
        )}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        {...props}
      >
        {children}
      </div>
    </div>,
    portalElement
  );
};

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
}
const Header = ({ className, children, onClose, ...props }: HeaderProps) => (
  <div
    className={cn(
      "flex items-center gap-4",
      !children ? "justify-end" : "justify-between",
      className
    )}
    {...props}
  >
    {children}
    <button className="cursor-pointer" onClick={onClose}>
      <i className="bi bi-x text-mos-gray-300 text-[30px]"></i>
    </button>
  </div>
);

const Content = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("my-4", className)} {...props}>
    {children}
  </div>
);

const Footer = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex justify-end gap-2", className)} {...props}>
    {children}
  </div>
);

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
