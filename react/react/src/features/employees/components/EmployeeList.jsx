import React from "react";
import EmployeeCard from "./EmployeeCard";
import "../styles/employeeList.css";

/**
 * EmployeeList Component
 * Displays a grid of employee cards
 *
 * @param {Array} employees - Array of employee objects to display
 */
function EmployeeList({ employees }) {
  if (!employees || employees.length === 0) {
    return (
      <p className="no-results">No employees found matching your criteria.</p>
    );
  }

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
