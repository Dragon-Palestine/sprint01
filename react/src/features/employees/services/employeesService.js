/**
 * Employee Service
 * Handles CRUD operations for employees using localStorage
 */

import { ALL_EMPLOYEES } from "../data/employeesData.js";
import { DEPARTMENTS, POSITIONS } from "../constants/employeesConstants.js";
const STORAGE_KEY = "employees_data";

// Get all employees from localStorage or default data
export function getEmployees() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const employees = JSON.parse(stored);
    // Migration: ensure all employees have position and valid department
    const migrated = employees.map((emp) => ({
      ...emp,
      position:
        emp.position || POSITIONS[Math.floor(Math.random() * POSITIONS.length)],
      department: DEPARTMENTS.includes(emp.department)
        ? emp.department
        : DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)],
    }));
    // Save migrated data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
    console.log("Loaded and migrated employees from storage:", migrated.length);
    return migrated;
  }
  // Initialize with default data
  console.log("Initializing with default employees:", ALL_EMPLOYEES.length);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ALL_EMPLOYEES));
  return ALL_EMPLOYEES;
}

// Save employees to localStorage
function saveEmployees(employees) {
  console.log("Saving employees to storage:", employees.length);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}

// Add a new employee
export function addEmployee(employee) {
  const employees = getEmployees();
  const newId =
    employees.length > 0 ? Math.max(...employees.map((emp) => emp.id)) + 1 : 1;
  const newEmployee = { ...employee, id: newId };
  employees.push(newEmployee);
  saveEmployees(employees);
  console.log("Added employee, new count:", employees.length);
  return newEmployee;
}

// Update an existing employee
export function updateEmployee(id, updatedEmployee) {
  const employees = getEmployees();
  const index = employees.findIndex((emp) => emp.id === id);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...updatedEmployee };
    saveEmployees(employees);
    return employees[index];
  }
  return null;
}

// Delete an employee
export function deleteEmployee(id) {
  const employees = getEmployees();
  const filtered = employees.filter((emp) => emp.id !== id);
  saveEmployees(filtered);
  return filtered;
}
