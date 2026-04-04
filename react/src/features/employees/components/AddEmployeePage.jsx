import React from "react";
import { useNavigate } from "react-router-dom";
import AddEmployeeForm from "./AddEmployeeForm";

/**
 * AddEmployeePage Component
 * Page for adding a new employee using React Router
 */
function AddEmployeePage({ onAdd }) {
  const navigate = useNavigate();

  const handleAdd = (employeeData) => {
    try {
      console.log("Adding employee:", employeeData);
      onAdd(employeeData);
      console.log("Navigating to /");
      navigate("/");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <AddEmployeeForm onAdd={handleAdd} onCancel={handleCancel} />
    </div>
  );
}

export default AddEmployeePage;
