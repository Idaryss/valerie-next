"use client";

import { Book } from "@/types";
import React, { useState, useCallback } from "react";
import { NOVELS_DATA } from "../constant";
import BookModal from "../component/BookModal";
import BookCard from "../component/BookCard";

const NovelsPage: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleOpenModal = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 font-serif">
        Mes Romans
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {NOVELS_DATA.map((book) => (
          <BookCard key={book.id} book={book} onCardClick={handleOpenModal} />
        ))}
      </div>
      {selectedBook && (
        <BookModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default NovelsPage;
