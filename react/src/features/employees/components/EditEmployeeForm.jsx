import React, { useState } from "react";
import {
  DEPARTMENTS,
  POSITIONS,
  STATUSES,
} from "../constants/employeesConstants.js";
import "../styles/editEmployeeForm.css";

/**
 * EditEmployeeForm Component
 * Form to edit an existing employee
 *
 * @param {Object} employee - Employee data to edit
 * @param {Function} onUpdate - Callback function to handle updating the employee
 * @param {Function} onCancel - Callback function to cancel the form
 */
function EditEmployeeForm({ employee, onUpdate, onCancel }) {
  const [formData, setFormData] = useState(() => ({
    name: employee?.name || "",
    email: employee?.email || "",
    department: employee?.department || "",
    position: employee?.position || "",
    status: employee?.status || "",
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.department &&
      formData.position &&
      formData.status
    ) {
      onUpdate(employee.id, formData);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="edit-employee-form">
      <h3>Edit Employee</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">Select Position</option>
            {POSITIONS.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            {STATUSES.map((stat) => (
              <option key={stat} value={stat}>
                {stat}
              </option>
            ))}
          </select>
        </div>
        <div className="form-actions">
          <button type="submit">Update Employee</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEmployeeForm;
