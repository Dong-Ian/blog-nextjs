"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Button from "../atoms/Button";

interface PaginationProps {
  postCount: number;
  perPage: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  postCount,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const totalPage = Math.ceil(postCount / perPage);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const handleChange = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      onPageChange({ selected: page - 1 });
    }
  };
  const maxPageToShow = 5;
  let startPage = Math.max(1, currentPage - 2);
  let endPage = startPage + maxPageToShow - 1;

  if (currentPage <= 3) {
    // 처음 3페이지는 무조건 1부터 시작
    startPage = 1;
    endPage = maxPageToShow;
  }

  if (endPage > totalPage) {
    endPage = totalPage;
    startPage = Math.max(1, endPage - maxPageToShow + 1);
  }

  const generatePagination = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => {
      const pageNumber = startPage + i;
      return (
        <Button.Default
          color="Main"
          key={pageNumber}
          className={cn(
            pageNumber === currentPage && "bg-black text-white",
            "hover:bg-black hover:text-white"
          )}
          onClick={() => handleChange(pageNumber)}
        >
          {pageNumber}
        </Button.Default>
      );
    }
  );
  return (
    <div className="flex flex-wrap justify-center gap-2 py-6">
      <Button.Default
        disabled={currentPage === 1}
        onClick={() => handleChange(1)}
        className="hover:bg-black hover:text-white"
      >
        처음
      </Button.Default>
      <Button.Default
        disabled={currentPage === 1}
        onClick={() => handleChange(prevPage)}
        className="hover:bg-black hover:text-white"
      >
        이전
      </Button.Default>
      {generatePagination}
      <Button.Default
        disabled={currentPage === totalPage}
        onClick={() => handleChange(nextPage)}
        className="hover:bg-black hover:text-white"
      >
        다음
      </Button.Default>
      <Button.Default
        disabled={currentPage === totalPage}
        onClick={() => handleChange(totalPage)}
        className="hover:bg-black hover:text-white"
      >
        마지막
      </Button.Default>
    </div>
  );
};

export default Pagination;
