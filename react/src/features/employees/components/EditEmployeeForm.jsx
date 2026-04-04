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
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title mb-0">Edit Employee</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="department" className="form-label">
                    Department:
                  </label>
                  <select
                    id="department"
                    name="department"
                    className="form-select"
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
                <div className="mb-3">
                  <label htmlFor="position" className="form-label">
                    Position:
                  </label>
                  <select
                    id="position"
                    name="position"
                    className="form-select"
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
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Status:
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="form-select"
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
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    Update Employee
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEmployeeForm;
