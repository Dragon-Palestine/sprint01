import React, { useState, useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import EmployeeCard from "./EmployeeCard";
import Pagination from "./Pagination";
import "../styles/employeeList.css";

const ITEMS_PER_PAGE = 12;
const ITEM_HEIGHT = 200; // Approximate height of EmployeeCard

const EmployeeList = React.memo(({ employees, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [lastEmployees, setLastEmployees] = useState(employees);

  let displayPage = currentPage;
  if (employees !== lastEmployees) {
    // If the employees array changes (due to filtering), reset the page to 1 programmatically
    // This resolves potential render errors and optimizes speed
    setLastEmployees(employees);
    setCurrentPage(1);
    displayPage = 1;
  }

  const totalPages = Math.ceil(employees.length / ITEMS_PER_PAGE);

  const paginatedEmployees = useMemo(() => {
    const startIndex = (displayPage - 1) * ITEMS_PER_PAGE;
    return employees.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [employees, displayPage]);

  if (!employees || employees.length === 0) {
    return (
      <p className="no-results">No employees found matching your criteria.</p>
    );
  }

  return (
    <>
      <List
        height={ITEM_HEIGHT * ITEMS_PER_PAGE} // Height for 12 items
        itemCount={paginatedEmployees.length}
        itemSize={ITEM_HEIGHT}
        width="100%"
      >
        {({ index, style }) => (
          <div style={style}>
            <EmployeeCard
              employee={paginatedEmployees[index]}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </div>
        )}
      </List>

      <Pagination
        currentPage={displayPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
});

export default EmployeeList;
