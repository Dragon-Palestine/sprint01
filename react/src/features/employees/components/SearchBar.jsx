import React from "react";
import "../styles/searchBar.css";

/**
 * SearchBar Component
 * Allows users to search employees by name or email
 *
 * @param {string} searchTerm - Current search term value
 * @param {Function} onSearchChange - Callback when search term changes
 */
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search employees by name or email..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search employees"
      />
    </div>
  );
}

export default SearchBar;
