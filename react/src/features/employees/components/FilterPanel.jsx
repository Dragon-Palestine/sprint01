import React from "react";
import "../styles/filterBar.css";

/**
 * FilterBar Component
 * Provides filtering options for employees by department and status
 *
 * @param {Array} departments - List of available departments
 * @param {Array} statuses - List of available statuses
 * @param {string} selectedDepartment - Currently selected department
 * @param {string} selectedStatus - Currently selected status
 * @param {Function} onDepartmentChange - Callback when department filter changes
 * @param {Function} onStatusChange - Callback when status filter changes
 */
function FilterBar({
  departments,
  statuses,
  selectedDepartment,
  selectedStatus,
  onDepartmentChange,
  onStatusChange,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="department-filter">Department:</label>
        <select
          id="department-filter"
          value={selectedDepartment}
          onChange={(e) => onDepartmentChange(e.target.value)}
          aria-label="Filter by department"
        >
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="status-filter">Status:</label>
        <select
          id="status-filter"
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          aria-label="Filter by status"
        >
          <option value="">All Statuses</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
