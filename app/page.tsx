"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { Book } from "@/types";
import {
  ALL_BOOKS_DATA,
  AUTHOR_BIO,
  AUTHOR_NAME,
  NOVELS_DATA,
} from "./constant";
import BookModal from "./component/BookModal";

const Home: React.FC = () => {
  const latestBook = ALL_BOOKS_DATA[ALL_BOOKS_DATA.length - 1];
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleOpenModal = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const truncateSummary = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    }
    const lastSpace = text.lastIndexOf(" ", maxLength);
    return text.substring(0, lastSpace > 0 ? lastSpace : maxLength) + "...";
  };

  const bioSummary = AUTHOR_BIO.split("\n").filter((p) => p)[0];

  const latestBookCategoryPath = NOVELS_DATA.some((b) => b.id === latestBook.id)
    ? "/novels"
    : "/new-romance";

  return (
    <>
      <div className="space-y-16 md:space-y-24">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/3 w-full flex-shrink-0">
            <img
              src="/valerie-photo.png"
              alt={`Portrait de ${AUTHOR_NAME}`}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 w-full">
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-6">
              Bienvenue dans l’univers d’écriture de {AUTHOR_NAME}.
            </h1>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{bioSummary}</p>
            </div>

            <Link
              href="/author"
              className="inline-block mt-4 font-semibold text-gray-800 hover:text-gray-900 transition-colors duration-300 group"
            >
              En savoir plus{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/novels"
                className="text-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
              >
                Découvrir ses Romans
              </Link>
              <Link
                href="/new-romance"
                className="text-center px-8 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Découvrir ses Romances
              </Link>
            </div>
          </div>
        </div>

        {/* Latest Book Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 font-serif">
            Dernière sortie
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src={latestBook.coverImageUrl}
                alt={`Couverture de ${latestBook.title}`}
                className="rounded-lg shadow-2xl w-full max-w-xs mx-auto md:max-w-none transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 font-serif">
                {latestBook.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {truncateSummary(latestBook.summary, 250)}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => handleOpenModal(latestBook)}
                  className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
                >
                  Lire le résumé
                </button>
                <Link
                  href={latestBookCategoryPath}
                  className="text-center px-6 py-2 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
                >
                  Voir les livres de cette collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedBook && (
        <BookModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Home;
