import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch, FaTimes } from 'react-icons/fa';

const suggestions = [
  "What were the top-selling products last month?",
  "Show me the user growth in Q1",
  "Compare revenue between Q1 and Q2",
 ];

export default function QueryInput({ onSubmit, isLoading }) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target) && 
          inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
      setShowSuggestions(false);
    }
  };

  const clearInput = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Ask Your Question</h2>
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Ask a business question..."
              className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 pr-12 text-gray-800 dark:text-gray-200 placeholder-gray-400"
            />
            {query && (
              <button
                type="button"
                onClick={clearInput}
                className="absolute right-14 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <FaTimes />
              </button>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-blue-500 hover:text-blue-600 disabled:opacity-50 transition-colors duration-300"
            >
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
        </form>
        
        {showSuggestions && (
          <div
            ref={suggestionsRef}
            className="absolute w-full mt-2 bg-white dark:bg-gray-700 rounded-xl shadow-2xl border dark:border-gray-600 z-20 overflow-hidden"
          >
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => {
                  setQuery(suggestion);
                  setShowSuggestions(false);
                }}
                className="px-6 py-3 hover:bg-blue-50 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200 text-gray-700 dark:text-gray-200"
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}