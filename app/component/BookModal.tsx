"use client";

import React, { useCallback, useEffect } from "react";
import type { Book } from "@/types";

const BookModal: React.FC<{ book: Book; onClose: () => void }> = ({
  book,
  onClose,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`book-title-${book.id}`}
    >
      <div
        className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/3 flex-shrink-0 bg-gray-100 p-6 md:p-8 flex items-center justify-center">
          {/* Dans la modale, object-contain est préférable pour voir toute la couverture */}
          <img
            src={book.coverImageUrl}
            alt={`Couverture de ${book.title}`}
            className="w-full max-h-60 md:max-h-none object-contain"
          />
        </div>
        <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-start">
            <h3
              id={`book-title-${book.id}`}
              className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4"
            >
              {book.title}
            </h3>
            <button
              className="text-gray-500 hover:text-gray-800 text-3xl transition-colors"
              onClick={onClose}
              aria-label="Fermer la vue du livre"
            >
              &times;
            </button>
          </div>
          <div className="prose max-w-none text-gray-600 leading-relaxed mb-6">
            {book.summary
              .split("\n")
              .filter((p) => p)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
          <div className="mt-auto pt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto text-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
            >
              Acheter ce livre
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
