/**
 * Employee data module
 * Exports generated employee data and re-exports constants
 */

import { generateEmployees } from "./employeeGenerator.js";
import {
  DEPARTMENTS,
  POSITIONS,
  STATUSES,
  EMPLOYEE_COUNT,
} from "../constants/employeesConstants.js";

// Generate all employees
const ALL_EMPLOYEES = generateEmployees(EMPLOYEE_COUNT);

export { ALL_EMPLOYEES, DEPARTMENTS, POSITIONS, STATUSES };
