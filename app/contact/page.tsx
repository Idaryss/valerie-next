"use client";

import React, { useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !subject || !message) {
      setError("Tous les champs sont requis.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        throw new Error("Erreur serveur");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setError("Impossible d’envoyer le message.");
      setStatus("error");
    }
  };

  const statusMessages = {
    success: (
      <p className="text-green-600 mt-4">
        Votre message a bien été envoyé ! Je vous répondrai dès que possible.
      </p>
    ),
    error: <p className="text-red-600 mt-4">{error}</p>,
    sending: <p className="text-gray-600 mt-4">Envoi en cours...</p>,
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-4 font-serif">
        Contactez-moi
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Pour toute question, proposition ou simplement l’envie d’échanger,
        n'hésitez pas à utiliser le formulaire ci-dessous.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Votre nom complet"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-800 focus:border-gray-800 transition bg-white text-gray-900 placeholder:text-gray-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="votre.email@exemple.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-800 focus:border-gray-800 transition bg-white text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder="Sujet de votre message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-800 focus:border-gray-800 transition bg-white text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Écrivez votre message ici..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-800 focus:border-gray-800 transition bg-white text-gray-900 placeholder:text-gray-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
            >
              {status === "sending" ? "Envoi..." : "Envoyer le message"}
            </button>
          </div>
        </div>
      </form>
      <div className="text-center">
        {status !== "idle" && statusMessages[status]}
      </div>
    </div>
  );
};

export default ContactPage;
