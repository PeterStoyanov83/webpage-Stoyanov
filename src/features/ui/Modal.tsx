'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  showCloseButton?: boolean;
  closeOnEsc?: boolean;
  closeOnOutsideClick?: boolean;
  className?: string;
  overlayClassName?: string;
  modalClassName?: string;
}

/**
 * Reusable Modal component that:
 * - Uses React Portal for better accessibility and z-index handling
 * - Traps focus within the modal for accessibility
 * - Prevents body scrolling when open
 * - Supports keyboard navigation (Escape to close)
 * - Centers content properly on all device sizes
 * - Handles animation gracefully
 */
export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  showCloseButton = true,
  closeOnEsc = true,
  closeOnOutsideClick = true,
  className = '',
  overlayClassName = '',
  modalClassName = '',
}: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle mounting state for SSR
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Handle body scrolling
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      
      return () => {
        // Restore scroll position
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, closeOnEsc]);

  // Trap focus within modal for accessibility
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleTabKey);
    
    // Focus first element when modal opens
    setTimeout(() => {
      firstElement?.focus();
    }, 100);

    return () => {
      window.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  // Handle outside click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOutsideClick && overlayRef.current === e.target) {
      onClose();
    }
  };

  if (!isMounted || !isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm grid place-items-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } ${overlayClassName}`}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-label={title || 'Modal'}
    >
      <div
        ref={modalRef}
        className={`bg-black/90 rounded-lg overflow-auto w-[95%] sm:w-[90%] max-w-4xl max-h-[95vh] sm:max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 ${modalClassName}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 text-white hover:bg-black/90 p-1.5 sm:p-2 rounded-full z-50"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {title && (
          <div className="border-b border-gray-700 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
          </div>
        )}

        <div className={`${className}`}>{children}</div>
      </div>
    </div>,
    document.body
  );
}