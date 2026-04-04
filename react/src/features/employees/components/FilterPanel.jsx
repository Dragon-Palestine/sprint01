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
const FilterBar = React.memo(
  ({
    departments,
    statuses,
    selectedDepartment,
    selectedStatus,
    onDepartmentChange,
    onStatusChange,
  }) => {
    return (
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="department-filter" className="form-label">
            Department:
          </label>
          <select
            id="department-filter"
            className="form-select"
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

        <div className="col-md-6">
          <label htmlFor="status-filter" className="form-label">
            Status:
          </label>
          <select
            id="status-filter"
            className="form-select"
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
  },
);

export default FilterBar;
