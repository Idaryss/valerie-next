import React from "react";
import type { Book } from "@/types";

const BookCard: React.FC<{ book: Book; onCardClick: (book: Book) => void }> = ({
  book,
  onCardClick,
}) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
    onClick={() => onCardClick(book)}
    onKeyDown={(e) => e.key === "Enter" && onCardClick(book)}
    role="button"
    tabIndex={0}
    aria-label={`Voir les détails pour ${book.title}`}
  >
    <div className="relative flex items-center justify-center h-72 bg-gray-100 overflow-hidden">
      <img
        src={book.coverImageUrl}
        alt={`Couverture de ${book.title}`}
        className="max-h-5/6 max-w-full object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end justify-center p-4">
        <span className="text-white text-lg font-semibold text-center pb-4">
          Voir le résumé
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 font-serif">
        {book.title}
      </h3>
    </div>
  </div>
);

export default BookCard;
