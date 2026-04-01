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
 */
function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>
        <strong>ID:</strong> {employee.id}
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${employee.email}`}>{employee.email}</a>
      </p>
      <p>
        <strong>Department:</strong> {employee.department}
      </p>
      <p>
        <strong>Position:</strong> {employee.position}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span
          className={`status-${employee.status.toLowerCase().replace(" ", "-")}`}
        >
          {employee.status}
        </span>
      </p>
    </div>
  );
}

export default EmployeeCard;
