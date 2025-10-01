import React from "react";
import { AUTHOR_BIO, AUTHOR_NAME } from "../constant";

const AuthorPage: React.FC = () => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-10 font-serif">
        À propos de l'auteur
      </h2>
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src="/valerie-photo.JPEG"
            alt={`Portrait de ${AUTHOR_NAME}`}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            {AUTHOR_NAME}
          </h3>
          <div className="max-w-3xl mx-auto p-4 md:p-6 text-gray-700 text-justify leading-relaxed text-sm md:text-base">
            {AUTHOR_BIO.split("\n").map((line, index) => (
              <p key={index} className="mb-4">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
