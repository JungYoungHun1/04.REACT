import React from "react";
import styled from "styled-components";

const PaginationUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const PaginationLl = styled.li`
  padding: 10px;
  font-size: 30px;
  border-radius: 5px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    color: blue;
    border-radius: 20px;
    background-color: skyblue;
    transform: scale(1.5);
  }
`;

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div>
        <PaginationUl>
          {pageNumbers.map((number) => (
            <PaginationLl key={number}>
              <span onClick={() => setCurrentPage(number)}>{number}</span>
            </PaginationLl>
          ))}
        </PaginationUl>
      </div>
    </div>
  );
};

export default Pagination;
