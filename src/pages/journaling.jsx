import React, { useState, useEffect } from "react";

export default function Journaling() {
  const [journalInput, setJournalInput] = useState("");
  const [journals, setJournals] = useState([]);

  // Load saved journals on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("journals")) || [];
    setJournals(saved);
  }, []);

  // Save journal entry
  const saveJournal = () => {
    if (!journalInput.trim()) {
      alert("Please write something before saving!");
      return;
    }

    const now = new Date();
    const timestamp = now.toLocaleString();

    const entry = {
      text: journalInput.trim(),
      time: timestamp,
    };

    const updated = [...journals, entry];
    setJournals(updated);
    localStorage.setItem("journals", JSON.stringify(updated));

    setJournalInput("");
  };

  // Clear all journals
  const clearJournals = () => {
    if (window.confirm("Are you sure you want to clear all journals?")) {
      setJournals([]);
      localStorage.removeItem("journals");
    }
  };

  return (
    <div className="bg-white p-6 mx-auto">
      {/* Header */}
      <nav className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">LifeCare Journaling</h1>
        <p className="text-gray-600">Write, reflect, and track your thoughts daily 📝</p>
      </nav>

      {/* Write Section */}
      <section className="bg-gray-100 shadow-md rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          ✍️ Write Your Journal
        </h2>
        <textarea
          id="journalInput"
          placeholder="Write your thoughts here..."
          value={journalInput}
          onChange={(e) => setJournalInput(e.target.value)}
          className="text-black w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
        ></textarea>

        <div className="mt-4 flex gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={saveJournal}
          >
            💾 Save Entry
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={clearJournals}
          >
            🗑 Clear All
          </button>
        </div>
      </section>

      {/* Saved Entries */}
      <section>
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          📖 Saved Journals
        </h2>
        {journals.length === 0 ? (
          <p className="text-gray-500">
            <em>No entries yet. Start writing your thoughts!</em>
          </p>
        ) : (
          <ul className="space-y-4">
            {journals.map((entry, index) => (
              <li
                key={index}
                className="p-4 bg-white shadow rounded-lg border-l-4 border-blue-600"
              >
                <span className="block text-sm text-gray-500">{entry.time}</span>
                <p className="mt-2 text-gray-800">{entry.text}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
