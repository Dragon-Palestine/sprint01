/**
 * Employee data generation utilities
 * Handles random employee data generation
 */

import {
  DEPARTMENTS,
  POSITIONS,
  STATUSES,
  FIRST_NAMES,
  LAST_NAMES,
} from "../constants/employeesConstants.js";

/**
 * Generate a random employee object
 * @param {number} id - Employee ID
 * @returns {Object} Employee object
 */
function generateRandomEmployee(id) {
  const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];

  const name = `${firstName} ${lastName}`;
  const department =
    DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)];
  const position = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
  const status = STATUSES[Math.floor(Math.random() * STATUSES.length)];
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

  return {
    id,
    name,
    email,
    department,
    position,
    status,
  };
}

/**
 * Generate multiple employees
 * @param {number} count - Number of employees to generate
 * @returns {Array} Array of employee objects
 */
function generateEmployees(count) {
  const employees = [];
  for (let i = 1; i <= count; i++) {
    employees.push(generateRandomEmployee(i));
  }
  return employees;
}

export { generateRandomEmployee, generateEmployees };
