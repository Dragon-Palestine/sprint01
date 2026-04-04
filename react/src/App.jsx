import { useState, useMemo, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/app.css";

// Importing from the employees feature module
import {
  DEPARTMENTS,
  STATUSES,
  SearchBar,
  FilterPanel,
  EmployeeList,
  EditEmployeeForm,
  AddEmployeePage,
} from "./features/employees";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./features/employees/services/employeesService.js";

/**
 * App Component
 * Main application component for the Employee Management System
 */
function App() {
  const [employees, setEmployees] = useState(getEmployees());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  // New state to store the filtered value after the debounce delay
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Implementing Debouncing logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000); // 1000ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Use useMemo to optimize performance when handling 1000 employees
  const filteredEmployees = useMemo(() => {
    const filtered = employees.filter((employee) => {
      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()) ||
        employee.email
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase());

      const matchesDept =
        selectedDepartment === "" || employee.department === selectedDepartment;
      const matchesStatus =
        selectedStatus === "" || employee.status === selectedStatus;

      return matchesSearch && matchesDept && matchesStatus;
    });
    console.log(
      "Filtered employees count:",
      filtered.length,
      "from total:",
      employees.length,
    );
    return filtered;
    console.log(
      "Filtered employees count:",
      filtered.length,
      "from total:",
      employees.length,
    );
    return filtered;
  }, [employees, debouncedSearchTerm, selectedDepartment, selectedStatus]);

  const handleAddEmployee = (employeeData) => {
    try {
      console.log("handleAddEmployee called with:", employeeData);
      const newEmployee = addEmployee(employeeData);
      console.log("New employee added:", newEmployee);
      const updatedEmployees = getEmployees();
      console.log("Setting employees state to:", updatedEmployees.length);
      setEmployees(updatedEmployees);
    } catch (error) {
      console.error("Error in handleAddEmployee:", error);
    }
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  const handleUpdateEmployee = (id, updatedData) => {
    const updatedEmployee = updateEmployee(id, updatedData);
    if (updatedEmployee) {
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === id ? updatedEmployee : emp)),
      );
    }
    setEditingEmployee(null);
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      const updatedEmployees = deleteEmployee(id);
      setEmployees(updatedEmployees);
    }
  };

  const handleCancelForm = () => {
    setEditingEmployee(null);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <h1>Employee Management System</h1>

            <Link to="/add-employee">
              <button className="add-employee-btn">Add New Employee</button>
            </Link>

            {editingEmployee && (
              <EditEmployeeForm
                employee={editingEmployee}
                onUpdate={handleUpdateEmployee}
                onCancel={handleCancelForm}
              />
            )}

            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            <FilterPanel
              departments={DEPARTMENTS}
              statuses={STATUSES}
              selectedDepartment={selectedDepartment}
              selectedStatus={selectedStatus}
              onDepartmentChange={setSelectedDepartment}
              onStatusChange={setSelectedStatus}
            />

            <p className="stats">
              Showing {filteredEmployees.length} of {employees.length} employees
            </p>

            <EmployeeList
              employees={filteredEmployees}
              onEdit={handleEditEmployee}
              onDelete={handleDeleteEmployee}
            />
          </div>
        }
      />
      <Route
        path="/add-employee"
        element={<AddEmployeePage onAdd={handleAddEmployee} />}
      />
    </Routes>
  );
}

export default App;
