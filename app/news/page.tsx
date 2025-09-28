"use client";

import { NewsEvent, PressItem } from "@/types";
import React, { useState, useCallback } from "react";
import { NEWS_EVENTS_DATA, PRESS_DATA } from "../constant";


const PressCard: React.FC<{
  item: PressItem;
  onImageClick: (imageUrl: string) => void;
}> = ({ item, onImageClick }) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
    onClick={() => onImageClick(item.imageUrl)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onImageClick(item.imageUrl)}
  >
    <div className="relative">
      <img
        src={item.imageUrl}
        alt={`Article de presse: ${item.title}`}
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-end justify-start p-4">
        <div className="text-white">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm">{item.source}</p>
        </div>
      </div>
    </div>
  </div>
);

const ImageModal: React.FC<{ imageUrl: string; onClose: () => void }> = ({
  imageUrl,
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

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
        onClick={onClose}
        aria-label="Fermer la vue de l'image"
      >
        &times;
      </button>
      <div
        className="relative max-w-4xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Article de presse en vue agrandie"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

const EventModal: React.FC<{ event: NewsEvent; onClose: () => void }> = ({
  event,
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

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleKeyDown]);

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    event.mapQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`event-title-${event.id}`}
    >
      <div
        className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h3
                id={`event-title-${event.id}`}
                className="text-2xl md:text-3xl font-bold font-serif text-gray-900"
              >
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{event.location}</p>
              <span className="mt-2 inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                {event.date}
              </span>
            </div>
            <button
              className="text-gray-500 hover:text-gray-800 text-3xl transition-colors"
              onClick={onClose}
              aria-label="Fermer la vue de l'événement"
            >
              &times;
            </button>
          </div>
          <p className="prose max-w-none text-gray-600 leading-relaxed mt-4">
            {event.description}
          </p>
        </div>
        <div className="flex-grow h-64 md:h-96">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Carte pour ${event.title}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const NewsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<NewsEvent | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseImageModal = () => {
    setSelectedImage(null);
  };

  const handleEventClick = (event: NewsEvent) => {
    setSelectedEvent(event);
  };

  const handleCloseEventModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-16 font-serif">
        PRESSE & EVENEMENT
      </h2>

      <section id="events" className="mb-16">
        <h3 className="text-3xl font-bold text-center mb-12 font-serif">
          Événements
        </h3>
        <div className="max-w-3xl mx-auto space-y-8">
          {NEWS_EVENTS_DATA.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-800 transform hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => handleEventClick(event)}
              onKeyDown={(e) => e.key === "Enter" && handleEventClick(event)}
              role="button"
              tabIndex={0}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-serif">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{event.location}</p>
                </div>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full text-right">
                  {event.date}
                </span>
              </div>
              <p className="mt-4 text-gray-600">{event.description}</p>
            </div>
          ))}
          {NEWS_EVENTS_DATA.length === 0 && (
            <p className="text-center text-gray-500">
              Aucun événement à venir pour le moment. Revenez bientôt !
            </p>
          )}
        </div>
      </section>

      <hr className="my-16 border-t-2 border-gray-200" />

      <section id="press">
        <h3 className="text-3xl font-bold text-center mb-12 font-serif">
          Revue de Presse
        </h3>
        {PRESS_DATA.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRESS_DATA.map((item) => (
              <PressCard
                key={item.id}
                item={item}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Aucun article de presse à afficher pour le moment.
          </p>
        )}
      </section>

      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={handleCloseImageModal} />
      )}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={handleCloseEventModal} />
      )}
    </div>
  );
};

export default NewsPage;
