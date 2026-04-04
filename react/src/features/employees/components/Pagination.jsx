import React from "react";

/**
 * Pagination Component
 *
 * @param {number} currentPage - The current active page
 * @param {number} totalPages - Total number of pages available
 * @param {function} onPageChange - Callback function to handle page switching
 */
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  // Generate an array of page numbers to display
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    // Logic to show a limited range (optional, but good for UX)
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      pageNumbers.push(i);
    } else if (i === currentPage - 3 || i === currentPage + 3) {
      pageNumbers.push("...");
    }
  }

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        &laquo; Previous
      </button>

      <div className="page-numbers">
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            className={`page-num-btn ${currentPage === page ? "active" : ""} ${page === "..." ? "dots" : ""}`}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="pagination-btn"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next &raquo;
      </button>
    </div>
  );
}

export default Pagination;
