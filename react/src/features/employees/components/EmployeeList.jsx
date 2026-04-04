import React, { useState, useMemo, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import Pagination from "./Pagination";
import "../styles/employeeList.css";

const ITEMS_PER_PAGE = 12;

function EmployeeList({ employees }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [prevEmployees, setPrevEmployees] = useState(employees);

  const effectivePage =
    employees !== prevEmployees ? 1 : currentPage;

  useEffect(() => {
    setPrevEmployees(employees);
  }, [employees]);

  const totalPages = Math.ceil(employees.length / ITEMS_PER_PAGE);

  const paginatedEmployees = useMemo(() => {
    const startIndex = (effectivePage - 1) * ITEMS_PER_PAGE;
    return employees.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [employees, effectivePage]);

  if (!employees || employees.length === 0) {
    return (
      <p className="no-results">
        No employees found matching your criteria.
      </p>
    );
  }

  return (
    <>
      <div className="employee-list">
        {paginatedEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>

      <Pagination
        currentPage={effectivePage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default EmployeeList;