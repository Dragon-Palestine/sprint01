import { useState, useMemo, useEffect } from "react";
import "./styles/app.css";

// Importing from the employees feature module
import {
  ALL_EMPLOYEES,
  DEPARTMENTS,
  STATUSES,
  SearchBar,
  FilterPanel,
  EmployeeList,
} from "./features/employees";

/**
 * App Component
 * Main application component for the Employee Management System
 */
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  // New state to store the filtered value after the debounce delay
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

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
    return ALL_EMPLOYEES.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(debouncedSearchTerm.toLowerCase());

      const matchesDept =
        selectedDepartment === "" || employee.department === selectedDepartment;
      const matchesStatus =
        selectedStatus === "" || employee.status === selectedStatus;

      return matchesSearch && matchesDept && matchesStatus;
    });
  }, [debouncedSearchTerm, selectedDepartment, selectedStatus]);

  return (
    <div className="App">
      <h1>Employee Management System</h1>

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
        Showing {filteredEmployees.length} of {ALL_EMPLOYEES.length} employees
      </p>

      <EmployeeList employees={filteredEmployees} />
    </div>
  );
}

export default App;
