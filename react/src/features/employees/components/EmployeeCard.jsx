import React from "react";
import "../styles/employeeCard.css";

/**
 * EmployeeCard Component
 * Displays individual employee information
 *
 * @param {Object} employee - Employee data object
 * @param {number} employee.id - Employee ID
 * @param {string} employee.name - Employee full name
 * @param {string} employee.email - Employee email address
 * @param {string} employee.department - Employee department
 * @param {string} employee.position - Employee position
 * @param {string} employee.status - Employee status
 * @param {Function} onEdit - Callback for editing employee
 * @param {Function} onDelete - Callback for deleting employee
 */
const EmployeeCard = React.memo(({ employee, onEdit, onDelete }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{employee.name}</h5>
          <p className="card-text">
            <strong>ID:</strong> {employee.id}
          </p>
          <p className="card-text">
            <strong>Email:</strong>{" "}
            <a href={`mailto:${employee.email}`}>{employee.email}</a>
          </p>
          <p className="card-text">
            <strong>Department:</strong> {employee.department}
          </p>
          <p className="card-text">
            <strong>Position:</strong> {employee.position}
          </p>
          <p className="card-text">
            <strong>Status:</strong>{" "}
            <span
              className={`badge ${
                employee.status === "Active"
                  ? "bg-success"
                  : employee.status === "On Leave"
                    ? "bg-warning"
                    : employee.status === "Terminated"
                      ? "bg-danger"
                      : "bg-secondary"
              }`}
            >
              {employee.status}
            </span>
          </p>
          <div className="d-flex gap-2">
            <button
              className="btn btn-warning btn-sm"
              onClick={() => onEdit(employee)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(employee.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default EmployeeCard;
